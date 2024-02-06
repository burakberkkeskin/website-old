## Overview

Personal website for network testing and learning

Deployed to a Debian 11 with docker.

In front of the nginx web server, there is a nginx reverse proxy that handles ssl.

Ssl is handled by origin server. Created and renewing with certbot by manual.

I use this image to test networks between client and servers.

## Build and use:

```bash
## Build the image with a version
docker build -t website:latest .

## Run the local builded image
docker run -p 80:80 website:latest

## Run the already builded image
docker run -p 80:80 safderun/website:latest
```
