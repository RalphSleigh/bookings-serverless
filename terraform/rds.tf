resource "aws_db_instance" "default" {
  allocated_storage    = 20
  db_name              = "bookings"
  engine               = "mariadb"
  engine_version       = "10.6.10"
  instance_class       = "db.t4g.micro"
  username             = "root"
  password             = random_password.db_password.result
  db_subnet_group_name = aws_db_subnet_group.db_subnet.name
  skip_final_snapshot  = true
}
