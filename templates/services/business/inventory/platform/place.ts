import { Place } from 'services/business/place/entities';
import { placeRepo } from 'services/business/place/repository/place';

export const getPlace = async (id: string, tenant: string): Promise<Place> => {
    return await placeRepo.getItem({ id, tenantId: tenant }, { TableName: process.env.PLACE_TABLE });
};