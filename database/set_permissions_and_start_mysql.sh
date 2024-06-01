#!/bin/bash

# Set the correct permissions for my.cnf
chmod 644 /etc/mysql/my.cnf

# Start MySQL
docker-entrypoint.sh mysqld
