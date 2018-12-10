# Angular snapshot directive

Whenever it is necessery to capture the screensot of a web page or an HTML element or an Angular component then this directive provides the feature to capture the screenshot.

## How it works ?

It works on the top of a libry called `html2canvas`. So for using this directive you have to install the `html2canvas`.

## How to use ?

First install the `html2canvas` by using the command i.e `npm i html2canvas --save`

Now download the `snapshot.directive.ts` to your project where you want to place as a directive. Then just include `SnapshotDirective` in your `AppModule` or any shared module if you have.

Use the directive as provided below,

        <element id="ele">
          .........................
          .........................
          .........................
          .........................
        </element>
        <button snapshot [eleRef]="'ele'"> Take snap </button>
        
###Example


        <button snapshot [eleRef]="'table'"> Take snap </button>
        
        <table id="table">
          <tr>
            <th>Company</th>
            <th>Employee</th>
          </tr>
          <tr>
            <td>HCL</td>
            <td>122000</td>
          </tr>
          <tr>
            <td>Accenture</td>
            <td>452266</td>
          </tr>
          <tr>
            <td>TCS</td>
            <td>222000</td>
          </tr>
        </table>
        
Even you can capture the screenshot of an Angular component in same procedure as in the above example,

        <button snapshot [eleRef]="'comp'"> Take snap </button>
        
        <component id="comp"></component>
        
## Directive attributes 

Following are the attributes of the `snapshot` directive,

<b>imageFormat : </b> `imageFormat` accepts the format of the screenshot e.g `application/png` or `application/jpeg` etc. The default value is `application/png`.
        
<b>fileName : </b> by using `fileName` you can provide the name of the screenshot. The default value is `download`.

<b>eleRef : </b> `eleRef` accepts the `id` reference of the the element ot component, which you want to capture.
