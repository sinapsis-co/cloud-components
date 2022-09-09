# Deploy demo project

changes=$(git diff --dirstat=files,0 HEAD~1 | cut -d'%' -f2 | cut -d' ' -f2 | cut -d'/' -f1,2,3 | uniq)

hasInfraChanges=$(node -p "console.log(process.argv.slice(1).map(e => e.split('/')[0]).includes('templates'))" $changes)
hasPlatformChanges=$(node -p "console.log(process.argv.slice(1).map(e => e.split('/')[0]).includes('platform'))" $changes)

if [[ $hasInfraChanges == *"true"* ]]; then
  echo "Updating Infra package"
  yarn release infra
fi

if [[ $hasInfraChanges == *"true"* ]]; then
  echo "Updating Platform package"
  yarn release platform
fi

# cd templates

# # Changing the config to isDemoProject: false
# input=$(cat config/index.ts)
# patten="isDemoProject: true,"
# sub="isDemoProject: false,"
# echo "${input/$patten/$sub}" >config/index.ts

# # Adding dependencies
# yarn add -W @sinapsis-co/cc-infra-v2
# yarn add -W @sinapsis-co/cc-platform-v2
