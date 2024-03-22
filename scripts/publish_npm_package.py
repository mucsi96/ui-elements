#!/usr/bin/env python3

import sys
from pathlib import Path
from publish_tools import ansible_utils
from publish_tools import npm_utils

root_directory = Path(__file__).parent.parent
secrets = ansible_utils.load_vars(sys.argv[2], root_directory / 'vars/vault.yaml')

npm_utils.publish_npm_package(
    src=root_directory,
    tag_prefix="version",
    npm_access_token=secrets['npm_access_token'],
    github_access_token=sys.argv[1]
)
