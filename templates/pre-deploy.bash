input=$(cat config/index.ts)
patten="isDemoProject: true,"
sub="isDemoProject: false,"
echo "${input/$patten/$sub}" >config/index.ts

yarn add -W @sinapsis-co/cc-infra-v2
yarn add -W @sinapsis-co/cc-platform-v2
