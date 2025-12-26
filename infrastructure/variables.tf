variable "cloudflare_api_token" {
  description = "The Cloudflare API Token"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "The Cloudflare Account ID"
  type        = string
}

variable "cloudflare_zone_id" {
  description = "The Cloudflare Zone ID"
  type        = string
}

variable "project_name" {
  description = "The name of the Cloudflare Pages project"
  type        = string
  default     = "my-astro-site"
}

variable "production_branch" {
  description = "The production branch for the Pages project"
  type        = string
  default     = "main"
}

variable "github_owner" {
  description = "The GitHub username or organization name owning the repo"
  type        = string
}

variable "github_repo" {
  description = "The name of the GitHub repository"
  type        = string
}

variable "custom_domain" {
  description = " The custom domain to point to the Pages project (e.g., example.com)"
  type        = string
}
