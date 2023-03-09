export CC_FUNCTION_TIMEOUT="300"
export EVENT_BUS="base-template-dev-andres-global-event-bus"
export PUBLIC_BUCKET="assets.bucket.andres.dev.base.sinapsis.co"
export CC_FUNCTION_TYPE="EVENT"
export CC_SERVICE="Assets"
export AWS_NODEJS_CONNECTION_REUSE_ENABLED="1"
export PRIVATE_BUCKET="assets.private.andres.dev.base.sinapsis.co"
export CC_ENV="andres-dev"

npx ts-node services/business/assets/handlers/event-asset-resize/handler.ts
