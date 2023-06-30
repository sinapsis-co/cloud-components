import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class LandingZoneTable implements TableStoreBuilder {
  tableName = 'landing-zone';
  keyMapping = { PK: 'PK' };
}
