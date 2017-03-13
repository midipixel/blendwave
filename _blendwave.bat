cd\
cd Users\Werther\Documents\Dev\DevProjetos\blendwave
start cmd /k harp server --port 9001
sleep 1
start cmd /k browser-sync start --proxy "localhost:9001" --files "**/*.jade, **/*.css, **/*.json, **/*.js, **/*.ejs, **/*.html" --no-notify

