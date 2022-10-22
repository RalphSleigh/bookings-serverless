variable "lambda_definitions" {
  description = "Map of lambda definitions"
  type        = map(any)

  default = {
    test = {
      name     = "test"
      code_dir = "test"
      path     = "test"
      //dont_create_endpoint = true
      method = "GET"
    },
    migrate = {
      name                 = "migrate"
      code_dir             = "migrate"
      path                 = "migrate"
      dont_create_endpoint = true
    },
    init = {
      name                 = "init"
      code_dir             = "init"
      path                 = "init"
      dont_create_endpoint = true
    },
    seed = {
      name                 = "seed"
      code_dir             = "seed"
      path                 = "seed"
      dont_create_endpoint = true
    },
    env = {
      name     = "env"
      code_dir = "env"
      path     = "env"
      method   = "get"
    }
    user = {
      name     = "user"
      code_dir = "user/get"
      path     = "user"
      method   = "get"
    },
    user_logout = {
      name     = "user_logout"
      code_dir = "user/logout"
      path     = "user/logout"
      method   = "post"
    },
    events = {
      name     = "events"
      code_dir = "events/get"
      path     = "events"
      method   = "get"
    },
    events_create = {
      name     = "events_create"
      code_dir = "events/create"
      path     = "event/create"
      method   = "post"
    },
    events_edit = {
      name     = "events_edit"
      code_dir = "events/edit"
      path     = "event/edit"
      method   = "post"
    },
    events_delete = {
      name     = "events_delete"
      code_dir = "events/delete"
      path     = "event/delete"
      method   = "post"
    },
    bookings_user = {
      name     = "bookings_user"
      code_dir = "bookings/user"
      path     = "booking/user"
      method   = "get"
    },
    bookings_get = {
      name     = "bookings_get"
      code_dir = "bookings/get"
      path     = "booking/{id}"
      method   = "get"
    },
    bookings_create = {
      name     = "bookings_create"
      code_dir = "bookings/create"
      path     = "booking/{id}/create"
      method   = "post"
    },
    bookings_edit = {
      name     = "bookings_edit"
      code_dir = "bookings/edit"
      path     = "booking/edit"
      method   = "post"
    },
    bookings_delete = {
      name     = "bookings_delete"
      code_dir = "bookings/delete"
      path     = "booking/delete"
      method   = "post"
    },
    auth_google_redirect = {
      name     = "auth_google_redirect"
      code_dir = "auth/google/redirect"
      path     = "auth/google/redirect"
      method   = "get"
    },
    auth_google_callback = {
      name     = "auth_google_callback"
      code_dir = "auth/google/callback"
      path     = "auth/google/callback"
      method   = "get"
    }
  }
}

locals {
  filtered_lambdas = { for k, v in var.lambda_definitions : k => v if !contains(keys(v), "dont_create_lambda") }
}

locals {
  filtered_endpoints = { for k, v in var.lambda_definitions : k => v if !contains(keys(v), "dont_create_endpoint") }
}



