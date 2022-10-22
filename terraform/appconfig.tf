resource "aws_appconfig_application" "config" {
  name        = "bookings-config-${terraform.workspace}"
  description = "bookings config for ${terraform.workspace}"
}

resource "aws_appconfig_environment" "config_environment" {
  name           = "bookings-config-environment-${terraform.workspace}"
  description    = "bookings config environment for ${terraform.workspace}"
  application_id = aws_appconfig_application.config.id
}

resource "aws_appconfig_configuration_profile" "config_profile" {
  application_id = aws_appconfig_application.config.id

  name         = "bookings-config-profile-${terraform.workspace}"
  description  = "bookings config profile for ${terraform.workspace}"
  location_uri = "hosted"
}

resource "aws_appconfig_hosted_configuration_version" "config_hosted_configuration_version" {
  application_id           = aws_appconfig_application.config.id
  configuration_profile_id = aws_appconfig_configuration_profile.config_profile.configuration_profile_id

  description = "bookings config configuration version for ${terraform.workspace}"

  content = jsonencode({
    ENV      = "dev"
    string_example = "ItWorks!"
  })
  content_type = "application/json"
}

resource "aws_appconfig_deployment_strategy" "config_deployment_strategy" {
  name        = "bookings-config-deployment-strat-${terraform.workspace}"
  description = "bookings config deployment strat for ${terraform.workspace}"

  replicate_to                   = "NONE"
  deployment_duration_in_minutes = 3
  growth_factor                  = 10
}


resource "aws_appconfig_deployment" "config_deployment" {
  application_id           = aws_appconfig_application.config.id
  configuration_profile_id = aws_appconfig_configuration_profile.config_profile.configuration_profile_id
  configuration_version    = aws_appconfig_hosted_configuration_version.config_hosted_configuration_version.version_number
  deployment_strategy_id   = aws_appconfig_deployment_strategy.config_deployment_strategy.id
  environment_id           = aws_appconfig_environment.config_environment.environment_id
}
