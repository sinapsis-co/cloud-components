name=$1
destinationFolder=$2
repoName=$3

pwd=$(pwd)

solutionTemplate='base'

echo $name $solutionTemplate $destinationFolder

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
sub="projectName: '$name',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="projectShortName: 'base',"
sub="projectShortName: '$name',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="baseDomainName: 'base.sinapsis.io',"
sub="baseDomainName: '$name.sinapsis.io',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="envDomainName: 'dev.base.sinapsis.io',"
sub="envDomainName: 'dev.$name.sinapsis.io',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="pipelineNotificationSlackChannel: 'cloud-components',"
sub="pipelineNotificationSlackChannel: '$name',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

input=$(cat $destinationFolder/config/index.ts)
patten="pipelineNotificationSlackChannel: 'cloud-components',"
sub="pipelineNotificationSlackChannel: '$name',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts
input=$(cat $destinationFolder/config/index.ts)

patten="repositoryName: 'cloud-components',"
sub="repositoryName: '$repoName',"
echo "${input/$patten/$sub}" >$destinationFolder/config/index.ts

cd $destinationFolder
yarn
yarn add @sinapsis-co/cc-core
yarn add @sinapsis-co/cc-sdk

cd pwd
