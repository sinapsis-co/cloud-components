# CC-CORE

`CC-CORE` serves as the fundamental library upon which CC is built, providing the essential framework for creating the entire application infrastructure. Based on CDK, it offers extensibility through native commands, thereby leveraging the inherent advantages of being strongly opinionated.

Each individual component, or Prefab, within `CC-CORE` embodies production-ready capabilities, adhering rigorously to established standards of quality, performance, and security. This opinionated approach ensures that every element encapsulated within `CC-CORE` contributes to a robust and reliable application, aligning seamlessly with the highest benchmarks in terms of quality, performance, and security.

By leveraging `CC-CORE`, developers benefit from a structured, opinionated framework that not only streamlines infrastructure creation but also upholds uncompromising standards of excellence across the entire application ecosystem.

---

### This package includes:

### `common`

Includes primary definitions for foundational pieces like:

- `coordinator.ts`: Module for coordinating tasks.
- `modifier.ts`: Utilities for modifying data.
- `service.ts`: Service-related functionalities.

And also the folder `naming` for naming conventions and `synth` for CDK generation helpers

### `prefab`

Houses different high level infra components:

- `analytics`: Modules related to analytics:
  - `events`: Automatic data ingestion for Event Bridge events
- `auth`: Authentication-related modules:
  - `cognito-pool`: Cognito pool functionalities.
- `compute`: Computational modules:
  - `fargate`: Fargate-related modules.
  - `function`: Lambda functions with different kind of triggers:
    - `api-function`: API function modules.
    - `base-function`: Base function modules.
    - `cognito-function`: Cognito function modules.
    - `cron-function`: Cron job function modules.
    - `event-function`: Event function modules.
    - `queue-function`: Queue function modules.
    - `topic-function`: Topic function modules.
- `frontend`: Infra for Frontend-related functionalities:
  - `spa`: Single Page Application modules.
  - `ssr`: Server-Side Rendering modules.
- `gateway`: Gateway-related modules:
  - `alb-public`: ALB Public modules.
  - `api`: API-related modules.
  - `app-sync`: App Sync modules.
  - `cdn-api`: CDN API modules.
  - `cdn-asset`: CDN Asset modules.
- `integration`: Integration modules:
  - `event-bus`: Event bus integration modules.
  - `queue`: Queue integration modules.
  - `topic`: Topic integration modules.
- `networking`: Networking-related modules:
  - `dns-domain-ref`: DNS domain reference modules.
  - `dns-subdomain-certificate`: DNS subdomain certificate modules.
  - `dns-subdomain-hosted-zone`: DNS subdomain hosted zone modules.
  - `vpc`: VPC modules.
  - `waf`: WAF modules.
- `storage`: Storage-related modules:
  - `bucket`: Bucket-related modules.
  - `dynamo`: DynamoDB-related modules.
  - `rds`: RDS-related modules.
  - `timestream`: Timestream-related modules.
- `util`: Utility modules:
  - `config`: Configuration-related utilities.
  - `deploy-pipeline`: Deployment pipeline utilities.
  - `ses`: SES (Simple Email Service) utilities.

### `script`

Scripts and commands for various tasks:

- `config-command`: Configuration command scripts.
- `index.ts`: Index file for scripts.
- `output-command`: Output command scripts.

---
