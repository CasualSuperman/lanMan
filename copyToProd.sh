#!/bin/bash
set -e
npm run build
rm -rf /srv/http/casualsuperman.com/lan/*;
cp -r ~/projects/lan/dist/* /srv/http/casualsuperman.com/lan/;
