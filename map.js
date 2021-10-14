
 
  const selectElement = document
  .querySelectorAll('.mappers-list-item')
  .forEach(item => {

      item.addEventListener('click', (event) => {
          const targetValue = event.target.getAttribute('value');
          if(targetValue !=null && targetValue != undefined){

          var result1 = [
            {
                name: targetValue.toLowerCase(),
            }, {
            }
        ];

          var result2 = [
              { name: 'cambridgeshire'.toLowerCase()}, 
              { name: 'Norfolk'.toLowerCase()}, 
              { name: 'Suffolk'.toLowerCase()}, 
              { name: 'Bedfordshire'.toLowerCase()}, 
              { name: 'Northamptonshire'.toLowerCase()}, 
              { name: 'Lincolnshire'.toLowerCase()}, 
              { name: 'Rutland'.toLowerCase()}, 

          ];

          function addId(mapped) {
            return mapped.map(function(obj, index) {
              return Object.assign({}, obj, { id: index });
            });
          };
          
          const output1 = addId(result1);
          const output2 = addId(result2);
          var props = ['id', 'name'];

          var result = result1
              .filter(function (o1) {
                  // filter out (!) items in result2
                  return result2.some(function (o2) {
                      return o1.name === o2.name; // assumes unique id
                  });
              })
              .map(function (o) {
                  // use reduce to make objects with only the required properties and map to apply
                  // this to the filtered array as a whole
                  return props.reduce(function (newo, name) {
                      newo[name] = o[name];
                      return newo;
                  }, {});
              });
            
                var finalvalues = result[0].name;
                console.log(finalvalues);
                window.open('/wrong-fuel-in-' + finalvalues + '.html');
            }
            return 0;
          
      });
  });

