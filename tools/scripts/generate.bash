solutionTemplate=$1
projectName=$2
destinationFolder=$3
repoName=$4

pwd=$(pwd)

echo $projectName $solutionTemplate $destinationFolder

cp -a ./solutions/$solutionTemplate/. $destinationFolder

rm $destinationFolder/cdk.context.json
rm $destinationFolder/pre-deploy.bash
rm $destinationFolder/yarn.lock
rm -r $destinationFolder/cdk.out

cp ./.npmrc $destinationFolder
cp ./tools/scripts/template.tsconfig.json $destinationFolder/tsconfig.json

# Text replacements
input=$(cat $destinationFolder/package.json)
patten="@sinapsis-co/cc-solution-base"
sub=$1
echo "${input/$patten/$sub}" >$destinationFolder/package.json

sed '/isDemoProject/d' $destinationFolder/config/index.ts >$destinationFolder/config/index.ts2
mv $destinationFolder/config/index.ts2 $destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="projectName: 'base',"
sub="projectName: '$projectName',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="projectShortName: 'base',"
sub="projectShortName: '$projectName',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="baseDomainName: 'base.sinapsis.io',"
sub="baseDomainName: '$projectName.sinapsis.io',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="envDomainName: 'dev.base.sinapsis.io',"
sub="envDomainName: 'dev.$projectName.sinapsis.io',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="pipelineNotificationSlackChannel: 'cloud-components',"
sub="pipelineNotificationSlackChannel: '$projectName',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="pipelineNotificationSlackChannel: 'cloud-components',"
sub="pipelineNotificationSlackChannel: '$projectName',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts
input=$(cat $destinationFolder/config/index.ts)

patten="repositoryName: 'cloud-components',"
sub="repositoryName: '$repoName',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

cd $destinationFolder
yarn
yarn add @sinapsis-co/cc-core
yarn add @sinapsis-co/cc-sdk

cd $(pwd)
