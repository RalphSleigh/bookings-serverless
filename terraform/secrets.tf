resource "random_password" "db_password" {
  length  = 16
  special = false
}

resource "aws_secretsmanager_secret" "db_password_secret" {
  name = "db_password_secret"
  recovery_window_in_days = 0
}

resource "aws_secretsmanager_secret_version" "db_password" {
  secret_id     = aws_secretsmanager_secret.db_password_secret.id
  secret_string = jsonencode({
    username = "root"
    password = random_password.db_password.result
  })
}