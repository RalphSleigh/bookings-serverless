resource "aws_network_interface" "nat" {
  subnet_id         = aws_subnet.two.id
  source_dest_check = false
  security_groups   = [aws_security_group.nat_sg.id]
}

resource "aws_eip" "public_ip" {
  vpc               = true
  network_interface = aws_network_interface.nat.id
}

resource "aws_security_group" "nat_sg" {
  name   = "NAT instance SG"
  vpc_id = aws_vpc.main.id
}

resource "aws_security_group_rule" "nat_sg_egress" {
  security_group_id = aws_security_group.nat_sg.id
  type              = "egress"
  cidr_blocks       = ["0.0.0.0/0"]
  from_port         = 0
  to_port           = 65535
  protocol          = "tcp"
}

resource "aws_security_group_rule" "nat_sg_ingress_any" {
  security_group_id = aws_security_group.nat_sg.id
  type              = "ingress"
  cidr_blocks       = ["10.0.0.0/16"]
  from_port         = 0
  to_port           = 65535
  protocol          = "all"
}

data "aws_ami" "nat_instance_ami" {
  most_recent = true
  owners      = ["568608671756"]
  filter {
    name   = "architecture"
    values = ["arm64"]
  }
  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }
  filter {
    name   = "name"
    values = ["fck-nat-amzn2-*-arm64-ebs"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  filter {
    name   = "block-device-mapping.volume-type"
    values = ["gp2"]
  }
}

resource "aws_launch_template" "nat_instance_template" {
  image_id      = data.aws_ami.nat_instance_ami.image_id
  instance_type = "t4g.nano"
  iam_instance_profile {
    arn = aws_iam_instance_profile.nat_instance_profile.arn
  }

  //vpc_security_group_ids = [aws_security_group.nat_sg.id]

  network_interfaces {

    device_index         = 0
    network_interface_id = aws_network_interface.nat.id

    //associate_public_ip_address = true
    //security_groups             = [aws_security_group.nat_sg.id]
    //delete_on_termination = true
    //subnet_id                   = aws_subnet.two.id
    //security_groups = ["${aws_security_group.nat_sg.id}"]
    //subnet_id       = aws_subnet.two.id
  }

}

resource "aws_autoscaling_group" "nat_instance_asg" {
  desired_capacity = 1
  max_size         = 1
  min_size         = 1

  availability_zones = ["eu-west-2a"]

  //vpc_zone_identifier = ["${aws_subnet.two.id}"]
  //vpc_zone_identifier       = [aws_subnet.two.id]

  launch_template {
    id      = aws_launch_template.nat_instance_template.id
    version = aws_launch_template.nat_instance_template.latest_version
  }
}


resource "aws_iam_role" "nat_instance_role" {
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "ssm" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
  role       = aws_iam_role.nat_instance_role.name
}

resource "aws_iam_role_policy" "eni" {
  role   = aws_iam_role.nat_instance_role.name
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:AttachNetworkInterface"
            ],
            "Resource": "*"
        }
    ]
}
EOF
}

resource "aws_iam_instance_profile" "nat_instance_profile" {
  role = aws_iam_role.nat_instance_role.name
}
