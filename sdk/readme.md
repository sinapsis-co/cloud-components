# CC-SDK

The `CC-SDK` extends the capabilities of `CC-CORE` by providing essential runtime code. With this library, we gain the ability to handle lambda integrations with the broader infrastructure in a typed manner. It optimizes our workflow, offering multiple mechanisms for code reusability.

When coupled with `CC-CORE`, `CC-SDK` empowers us to build diverse serverless applications. These applications are not only production-ready but also excel in both platform and runtime aspects. This comprehensive approach ensures robustness, addressing every critical perspective of the backend solution.

By leveraging these libraries in tandem, we achieve a holistic and efficient means of managing serverless architectures, covering every essential aspect of a sophisticated backend solution.

---

### This package includes:

### `catalog`

Contains modules related to each kind of catalog:

- `api`: Holds files related to the catalog API.
- `api-integration`: Manages integrations for the catalog API.
- `event`: Deals with catalog-related events.
- `notification`: Handles notifications concerning the catalog.
- `secret`: Manages secret information relevant to the catalog.

### `error`

Handles error-related functionalities:

- `catalog.ts`: Contains error handling specific to the catalog.
- `index.ts`: Manages overall error handling.
- `types.ts`: Holds types or interfaces related to errors.

### `handler`

Manages different types of request handlers:

- `api`: Lambda Handlers for Api Gateway
- `event`: Lambda Handlers for Event Bridge
- `queue`: Lambda Handlers for SQS
- `resolver`: JS Resolvers for AppSync

### `integration`

Manages integrations with Downstream services:

- `api`: Integrations with external APIs.
- `cognito`: Integration modules for Cognito services.
- `config`: Manages configuration for function dynamic configs.
- `event`: Handles event dispatching for integrations.
- `notification`: Integration modules for notification systems.
- `queue`: Manages integrations with queues.
- `store`: Integrations with various types of data stores.
- `topic`: Modules related to topic-based integrations.

### `lib`

Contains wrappers for utility libraries:

- `dayjs.ts`: Utility functions related to date and time management using Day.js.
- `schemy.ts`: Utility for schema validation
- `uuid.ts`: Functions or utilities for generating UUIDs.

### `logger`

Deals with logging functionalities:

- `catalog.ts`: Logging specific to the catalog functionality.
- `index.ts`: Overall logging setup or general logging functionality.

### `model`

Main type structure for interaction with dynamo repositories

### `tracing`

Related to tracing functionalities, based on X-Ray.

### `util`

Contains various utility functions or helpers:

- `chunk-array.ts`: Utility function for chunking arrays.
- `executers.ts`: Functions related to executing tasks.
- `pagination.ts`: Functions or utilities for managing pagination.
- `timeout.ts`: Utility functions for handling timeouts.
