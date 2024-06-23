// src/main.server.ts

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Exporta el AppServerModule si es necesario para Angular Universal
export { AppServerModule } from './app/app.config.server';
