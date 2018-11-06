#!/bin/sh
echo ""
echo "--- Starting Everipixel Frontend Server ---"
exec nginx -c /etc/nginx/config/nginx.conf -g "daemon off;"
