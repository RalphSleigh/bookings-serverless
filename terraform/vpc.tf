data "aws_availability_zones" "available" {
  state = "available"
}

resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = {
    Name = "main"
  }
}

resource "aws_subnet" "one" {
  tags = {
    Name = "Subnet 1 - az1 - private"
  }
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = data.aws_availability_zones.available.names[0]
}

resource "aws_subnet" "two" {
  tags = {
    Name = "Subnet 2 - az1 - ngw - public"
  }
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = data.aws_availability_zones.available.names[0]
}

resource "aws_subnet" "three" {
  tags = {
    Name = "Subnet 3 - az2 - private"
  }
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.3.0/24"
  availability_zone = data.aws_availability_zones.available.names[1]
}


resource "aws_db_subnet_group" "db_subnet" {
  name       = "db-subnet"
  subnet_ids = [aws_subnet.one.id, aws_subnet.three.id]
}

resource "aws_default_security_group" "default_security_group" {
  vpc_id = aws_vpc.main.id

  ingress {
    from_port = "0"
    to_port   = "0"
    protocol  = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port = "0"
    to_port   = "0"
    protocol  = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

resource "aws_internet_gateway" "ig" {
  vpc_id = aws_vpc.main.id
}

resource "aws_eip" "nat_eip" {
  vpc        = true
  depends_on = [aws_internet_gateway.ig]
}

resource "aws_nat_gateway" "nat-gw" {
  connectivity_type = "public"
  subnet_id         = aws_subnet.two.id
  allocation_id     = aws_eip.nat_eip.id
  depends_on        = [aws_internet_gateway.ig]
}

resource "aws_route_table" "private" {
  tags = {
    Name = "RT 1 - NAT - Private"
  }
  vpc_id = aws_vpc.main.id
}

resource "aws_route_table" "public" {
  tags = {
    Name = "RT 2 - IGW - Public"
  }
  vpc_id = aws_vpc.main.id
}

resource "aws_route" "private_nat_gateway" {
  route_table_id         = aws_route_table.private.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.nat-gw.id
}

resource "aws_route" "internet_gateway" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.ig.id
}

resource "aws_route_table_association" "subnet_one" {
  subnet_id      = aws_subnet.one.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "subnet_two" {
  subnet_id      = aws_subnet.two.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "subnet_three" {
  subnet_id      = aws_subnet.three.id
  route_table_id = aws_route_table.private.id
}

resource "aws_vpc_endpoint" "secret_manager_interface" {
  vpc_id            = aws_vpc.main.id
  service_name      = "com.amazonaws.eu-west-2.secretsmanager"
  subnet_ids        = [aws_subnet.one.id]
  vpc_endpoint_type = "Interface"

  security_group_ids = [aws_default_security_group.default_security_group.id]

  policy = <<POLICY
{
    "Statement": [
        {
            "Action": "*",
            "Effect": "Allow",
            "Resource": "*",
            "Principal": "*"
        }
    ]
}
POLICY

  private_dns_enabled = true
}
