#!/usr/bin/env python3

from pathlib import Path
from publish_tools import github_utils

root_directory = Path(__file__).parent.parent

github_utils.create_pages_artifact(directory=root_directory / 'storybook-static')
