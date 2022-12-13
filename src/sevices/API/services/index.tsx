import { Services } from '../../../types/services';
import networkClient from '../../NetworkClient';

class ServicesAPI {
  async getServices(carId: string): Promise<Services[] | undefined> {
    try {
      const services = await networkClient.get('/car/services' + carId);
      return services.data;
    } catch (e) {
      console.log('ServicesAPI getServices: ', e);
    }
  }
}

const servicesAPI = new ServicesAPI();

export default servicesAPI;
