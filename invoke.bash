echo $1
TS_NODE_BASEURL=./sdk && npx ts-node -r tsconfig-paths/register invoke.ts $1
