import { GenericInformationModule } from './generic-information-module';

describe('GenericInformationModule', () => {
  let genericModule: GenericInformationModule;

  beforeEach(() => {
    genericModule = new GenericInformationModule();
  });

  it('should create an instance', () => {
    expect(genericModule).toBeTruthy();
  });
});
