1. Here are some common issues & solutions:
  1. Creation of a new project takes forever (longer than 3 minutes) 
	That happens on Windows from time to time => Try running the command line as administrator
  2. You get an EADDR error (Address already in use)
    	You might already have another ng serve process running - make sure to quit that or use ng serve --port ANOTHERPORT  to serve your project on a new port
   3. My changes are not reflected in the browser (App is not compiling)
    	Check if the window running ng serve  displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI	
2. If issues, try angular 13.0.4 - npm i -g @angular/cli@13.0.4
3. ng serve -> to start hosting the app
4. app.module.ts -> specify the modules we need, and can refer to them in the html.
  1. import {module} from '@angular/module'
  2. Add module name in imports: section
  
5. Components:
  1. app-component is the root component.
  2. Can be reused throught the page
  3. It's just a (typesript) class so that angular can instantiate it
  4. Needs a decorator @Component() with a js object that has the selector and (required) templateurl or template (html)
6. Module: bundle of functionality of our app, gives angular the information about which features my app have and use.
7. In the app.module.ts, new components are registered in the declarations array
8. The selector is like a CSS selector
  1. [] -> attribute selector
  2. . -> class selector
9. Databinding = Communication between TS and HTML of a component
  1. String Interpolation {{data}}
  2. Property Binding [property]="data"
  3. Event Binding (event)="expression"
  4. Two-Way Binding [{ngModel}]="data"
10. Directives
  1. They are instructions in the DOM
  2. Their selector can also be like it is for components, but typically uses the attribute selector
  3. ngStyle and ngClass (directives) take javascript objects as arguments
  4. ngFor -> *ngFor="let server of servers"

---------------------------------------------------------------
1. Planning for the course project:
  1. Root component - holds everything together
  2. Shopping list - shopping list edit
  3. Recipe Book - recipe item, recipe detail
  4. Header - to navigate and whatnot
  5. Ingredient model - widely used
  6. Recipe model - widely used too

