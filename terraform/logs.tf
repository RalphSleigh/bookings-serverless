resource "aws_cloudwatch_log_group" "booking_system_logs" {
  name =  "bookings_system_logs_${terraform.workspace}"
}

resource "aws_cloudwatch_log_stream" "booking_system_logs" {
  name           = "bookings_system_logs_${terraform.workspace}"
  log_group_name = aws_cloudwatch_log_group.booking_system_logs.name
}