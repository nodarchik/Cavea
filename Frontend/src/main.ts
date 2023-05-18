// Import the necessary modules and components
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Bootstrap the application with AppModule using the platformBrowserDynamic.
platformBrowserDynamic().bootstrapModule(AppModule)
  // Catch any errors that occur during bootstrapping.
  .catch(err => console.error(err));