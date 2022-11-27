resource "aws_db_instance" "database" {
  allocated_storage    = 20
  db_name              = "bookings"
  engine               = "mariadb"
  engine_version       = "10.5.17"
  instance_class       = "db.t4g.micro"
  username             = "root"
  password             = random_password.db_password.result
  db_subnet_group_name = aws_db_subnet_group.db_subnet.name
  skip_final_snapshot  = true
  backup_retention_period = 30
  backup_window = "02:30-03:00"
  maintenance_window = "Mon:00:00-Mon:02:00"
  apply_immediately = true
}