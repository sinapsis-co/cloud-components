import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

// Services
import { Identity } from './identity';

// External Services
import { CdnMedia } from 'services/support/cdn-media';
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { Notifications } from 'services/support/notifications';
import { StripeSupportService } from 'services/support/stripe';
import { CdnApi } from '../support/cdn-api';
import { CustomEventBus } from '../support/custom-event-bus';
import { Assets } from './assets';
import { Balance } from './balance';
import { BaseCrud } from './base-crud';
import { BaseEvent } from './base-event';
import { Category } from './category';
import { Inventory } from './inventory';
import { InventoryAllocation } from './inventory-allocation';
import { Order } from './order';
import { Payment } from './payment';
import { Payout } from './payout';
import { PayoutSettingUser } from './payout-setting-user';
import { Place } from './place';
import { Product } from './product';
import { SearchService } from './search';
import { Stock } from './stock';
import { StockReport } from './stock-report';
import { StripeConnect } from './stripe-connect';
import { StripeCustomer } from './stripe-customer';
import { StripePayout } from './stripe-payout';
import { StripeProduct } from './stripe-product';
import { StripeSubscription } from './stripe-subscription';
import { Transaction } from './transaction';
import { WaitList } from './wait-list';

export type GlobalServiceDependencies = {
  notifications: Notifications;
  cdnApi: CdnApi;
  cdnMedia: CdnMedia;
  customEventBus: CustomEventBus;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  identity: Identity;
  stripeService: StripeSupportService;
};

export class BusinessServices {
  public readonly identity: Identity;
  public readonly baseCrud: BaseCrud;
  public readonly baseEvent: BaseEvent;
  public readonly assets: Assets;
  public readonly searchService: SearchService;
  public readonly category: Category;
  public readonly place: Place;
  public readonly product: Product;
  public readonly inventory: Inventory;
  public readonly stock: Stock;
  public readonly inventoryAllocation: InventoryAllocation;
  public readonly stockReport: StockReport;
  public readonly stripeCustomer: StripeCustomer;
  public readonly stripeSubscription: StripeSubscription;
  public readonly stripeProduct: StripeProduct;
  public readonly order: Order;
  public readonly waitList: WaitList;
  public readonly balance: Balance;
  public readonly payout: Payout;
  public readonly payoutSettingUser: PayoutSettingUser;
  public readonly payment: Payment;
  public readonly stripeConnect: StripeConnect;
  public readonly stripePayout: StripePayout;
  public readonly transaction: Transaction;

  constructor(scope: Construct, globalProps: GlobalProps, dependencies: Omit<GlobalServiceDependencies, 'identity'>) {
    this.identity = new Identity(scope, globalProps, dependencies);

    const globalDeps: GlobalServiceDependencies = { ...dependencies, identity: this.identity };

    this.assets = new Assets(scope, globalProps, globalDeps);
    this.baseCrud = new BaseCrud(scope, globalProps, globalDeps);
    this.baseEvent = new BaseEvent(scope, globalProps, globalDeps);
    this.searchService = new SearchService(scope, globalProps, globalDeps);
    this.category = new Category(scope, globalProps, globalDeps);
    this.place = new Place(scope, globalProps, globalDeps);
    this.product = new Product(scope, globalProps, {
      ...globalDeps,
      categoryService: this.category,
    });
    this.inventory = new Inventory(scope, globalProps, {
      ...globalDeps,
      placeService: this.place,
      productService: this.product,
    });
    this.stock = new Stock(scope, globalProps, globalDeps);
    this.inventoryAllocation = new InventoryAllocation(scope, globalProps, {
      ...globalDeps,
      inventoryService: this.inventory,
    });
    this.stockReport = new StockReport(scope, globalProps, {
      ...globalDeps,
      stock: this.stock,
      inventoryAllocation: this.inventoryAllocation,
    });
    this.stripeCustomer = new StripeCustomer(scope, globalProps, { ...globalDeps });
    this.order = new Order(scope, globalProps, {
      ...globalDeps,
      stripeCustomer: this.stripeCustomer,
    });
    this.stripeSubscription = new StripeSubscription(scope, globalProps, {
      ...globalDeps,
      stripeCustomer: this.stripeCustomer,
      serviceOrder: this.order,
    });
    this.stripeProduct = new StripeProduct(scope, globalProps, { ...globalDeps });
    this.waitList = new WaitList(scope, globalProps, { ...globalDeps });
    this.balance = new Balance(scope, globalProps, { ...globalDeps });
    this.payout = new Payout(scope, globalProps, { ...globalDeps });
    this.payoutSettingUser = new PayoutSettingUser(scope, globalProps, { ...globalDeps });
    this.payment = new Payment(scope, globalProps, {
      ...globalDeps,
      orderService: this.order,
      stripeCustomer: this.stripeCustomer,
    });
    this.stripeConnect = new StripeConnect(scope, globalProps, {
      ...globalDeps,
    });
    this.stripePayout = new StripePayout(scope, globalProps, {
      ...globalDeps,
    });
    this.transaction = new Transaction(scope, globalProps, {
      ...globalDeps,
    });
  }
}
