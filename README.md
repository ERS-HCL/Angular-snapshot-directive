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

        &lt;button snapshot [eleRef]="'table'"&gt; Take snap &lt;/button&gt;
        
        &lt;table id="table&gt;
          &lt;tr&gt;
            &lt;th>Company&lt;/th&gt;
          &lt;th&gt;Employee&lt;/th&gt;
          &lt;/tr&gt;
          &lt;tr id="row-1"&gt;
            &lt;td&gt;HCL&lt;/td&gt;
            &lt;td&gt;122000&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr&gt;
            &lt;td&gt;Accenture&lt;/td&gt;
            &lt;td&gt;45226&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr&gt;
            &lt;td&gt;TCS&lt;/td&gt;
            &lt;td&gt;222000&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
