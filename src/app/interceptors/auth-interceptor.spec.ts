import { AuthInterceptor } from './auth-interceptor';
import { AuthService } from '../services/auth.service';

describe('AuthInterceptor', () => {
  let mockAuthService: AuthService;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['getAuthToken']);
  });

  it('should create an instance', () => {
   
    expect(new AuthInterceptor(mockAuthService)).toBeTruthy();
  });
});
