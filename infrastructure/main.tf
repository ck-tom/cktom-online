resource "cloudflare_pages_project" "astro_site" {
  account_id        = var.cloudflare_account_id
  name              = var.project_name
  production_branch = var.production_branch

  build_config {
    build_command   = "npm run build"
    destination_dir = "dist"
    root_dir        = "web"
  }

  source {
    type = "github"
    config {
      owner                         = var.github_owner
      repo_name                     = var.github_repo
      production_branch             = var.production_branch
      pr_comments_enabled           = true
      deployments_enabled           = true
      production_deployment_enabled = true
      preview_deployment_setting    = "all"
      preview_branch_includes       = ["*"]
      preview_branch_excludes       = ["main", "prod"]
    }
  }
}

resource "cloudflare_pages_domain" "custom_domain" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.astro_site.name
  domain       = var.custom_domain
}

resource "cloudflare_record" "cname" {
  zone_id = var.cloudflare_zone_id
  name    = var.custom_domain
  content = cloudflare_pages_project.astro_site.subdomain
  type    = "CNAME"
  proxied = true
}
