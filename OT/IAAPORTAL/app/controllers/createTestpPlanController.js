oTech.controller('createTestPlanController',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices,
                $stateParams, testScriptService, uiGridConstants, $cookieStore,  $uibModal , $log,$timeout) {

var userID = sessionStorage.userId;
               var token = sessionStorage.token;
               var assignVirtualDevice_Data={};
               assignVirtualDevice_Data.virtualDeviceVoList=[];

               

  $scope.virtualDeviceGridOptions = oApp.config.virtualDeviceGridOptions;
    $scope.virtualDeviceGridOptions.onRegisterApi = function( gridApi ) { //extra code
      $scope.gridApi = gridApi;
      $scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
        
        var name=row.entity.name;
        assignVirtualDevice_Data.virtualDeviceVoList.push({"name":name});
        console.log(assignVirtualDevice_Data.virtualDeviceVoList);
      }); 
      };

var fetchVirtualDevices =  function(token){
  promise2 = testScriptService.fetchVirtualDevices(token);
  promise2.then(
                                            function (data) {

                                              console.log("fetchVirtualDevicesfetchVirtualDevices");
                                                 console.log(data);
                                               
                                              $scope.virtualDeviceGridOptions.data = data;  
                                            },
                                            function (err) {
                                                console.log(err);
                                            }
                                    );

 };     

fetchVirtualDevices(token);
             $scope.createTestPlan ={};
               var sendCreateData ={};
               
              $scope.createTestPlan.jobName="bnsf_tskAB";
               $scope.createTestPlanService = function() {
       var superParentObject, parentObject,childObject;
          for(var i=0; i<$rootScope.tree_data[0].children.length;i++){
              superParentObject  =  $rootScope.tree_data[0].children;
              for(var j=0; j<$rootScope.tree_data[0].children[i].children.length;j++){
                parentObject =  $rootScope.tree_data[0].children[i].children;
                for(var k=0; k<$rootScope.tree_data[0].children[i].children[j].children.length;k++){
                 childObject= $rootScope.tree_data[0].children[i].children[j].children;
              }
           }
      }

      if(childObject[0].entity && assignVirtualDevice_Data.virtualDeviceVoList.length>0){
        console.log("SUCCCESSSS");

      }
      else{

    var flag="Please add the commands to the test plan and select the device";
      if(assignVirtualDevice_Data.virtualDeviceVoList.length<=0){
        flag="Please select the virtual devices";
      }
      if(!childObject[0].entity){
        flag="Please select the commands"
      }
      if(!childObject[0].entity && assignVirtualDevice_Data.virtualDeviceVoList.length<=0){
        flag="Please add the commands to the test plan and select the device";
      }
        $scope.createTestPlanService121(flag);
        console.log("FREty==un succeee");
        return 0;
      }

console.log("Entereing");
      sendCreateData.jobName =$scope.createTestPlan.jobName;
      sendCreateData.jobCreatedBy=userID;
      sendCreateData.taskVOList =[];sendCreateData.taskVOList[0] ={};
      sendCreateData.taskVOList[0].taskName =$rootScope.tree_data[0].title;
      sendCreateData.taskVOList[0].taskLoop =$rootScope.tree_data[0].loop;

sendCreateData.taskVOList[0].taskCreatedBy =userID;


            sendCreateData.taskVOList[0].taskExecutorVOList =[];

      for(var i=0; i<superParentObject.length;i++){
          sendCreateData.taskVOList[0].taskExecutorVOList[i] ={};
          sendCreateData.taskVOList[0].taskExecutorVOList[i].taskExecutorName =superParentObject[i].title;
          sendCreateData.taskVOList[0].taskExecutorVOList[i].taskExecutorLoop =superParentObject.loop;
           sendCreateData.taskVOList[0].taskExecutorVOList[i].taskExecutorSeqNo=1;
          
         sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList =[];



        for(var j=0;j<parentObject.length; j++){
            sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j] = {};
            sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j].commandExecutorName =parentObject[j].title;
            sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j].commandExecutorLoop =parentObject[j].loop;
            sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j].commandExecutorSeqNo =parentObject[j].sequenceNo;
            sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j].commandExecutorCommandVOList =[];
            
 console.log("childObject[k]childObject[k]childObject[k]");
             console.log(childObject);
            

           for(var k=0; k<childObject.length;k++){


sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j].commandExecutorCommandVOList[k] ={};
         
            //console.log(childObject[k].entity.commandName);
             sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j].commandExecutorCommandVOList[k].commandId =childObject[k].entity.commandId;
sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j].commandExecutorCommandVOList[k].commandSeqNo =childObject[k].entity.commandSeqNo;
sendCreateData.taskVOList[0].taskExecutorVOList[i].commandExecutorVOList[j].commandExecutorCommandVOList[k].commandParams =childObject[k].entity.commandParams;
              }
     }
      }

        var jsonData=JSON.stringify(sendCreateData);
        console.log("jsonDatajsonDatajsonDatajsonData");
         console.log(jsonData);
                promise = testScriptService.CreateSrvc(userID,jsonData);

               
                                    
                            promise.then(
                                            function (data) {
                                              console.log("datadatadatadata");
                                                 console.log(data);
                                                 if(data.status=="Success"){
                  assignVirtualDevice_Data.jobVo={"jobId" : data.NewTestPlan.jobId};
                      assignVirtualDevice(token,assignVirtualDevice_Data);
                    }
                     else {
                      console.log('else');
                      $rootScope.Message=" " +data.status;
       $('#MessageColor').css("color", "red");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);

                     }
                      
                                                
                                            },
                                            function (err) {
                                                console.log(err);
                                            }
                                    );



 


var assignVirtualDevice =function(token,assignVirtualDevice_Data){
 
   promise1 = testScriptService.assignVirtualDevice(userID,token,JSON.stringify(assignVirtualDevice_Data));
  promise1.then(
                                            function (data) {
                                              
                                              console.log("sujuilfsdfjkl");
                                                 console.log(data);
                                   if(data.status=="success"){
                                     $location.path('/CreateTestRun');
                                    
    
                    }
                     else {
                      console.log('else');
                      $rootScope.Message=" " +data.status;
       $('#MessageColor').css("color", "red");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);

                     }
                                                
                                            },
                                            function (err) {
                                                console.log(err);
                                            }
                                    );
}




            }
    $scope.testPlanDate = new Date();
    $scope.animationsEnabled = true;

   /*
                var token = sessionStorage.token;
                $scope.my_tree = {};
                var commandName = [];
                promise = testScriptService.FetchCommands(userId, token);
                promise.then(
                        function (data) {
                        $scope.Commands = data;
                                console.log($scope.Commands);
                        },
                        function (err) {
                        console.log(err);
                        }
                );
                //Example
                $scope.Data = [];
                commandName.push({name: $scope.Data.commandName});
                console.log("Command Name: " + commandName)

*/

               $rootScope.tree_data = [ {
                'loop':1,'sequenceNo':1010101,
                'title': 'Task Plan_name'+new Date(),
         'children':[{
         'id': 1,
         'loop':1,'sequenceNo':1,
         'title': 'Task Executor',
         'ids':[{'id':1}],
         'children': [{'id': 1,  'loop':1, 'sequenceNo':1,
         'title': 'Command Executor',
         'ids':[{'id':1, 'parentId':1}],
         'children': [ {'id': 1,  'loop':1, 'sequenceNo':1,
         'title': 'Add Command' ,
         'ids':[{'id':1, 'parentId':1,'superparentId':1}]

        }
        ]  }   ]


       } ]
      }];


           $scope.col_defs = [
            {
                     field: "ids",
                        displayName: " ",
                        cellTemplate: "<span>&nbsp;&nbsp;</span> <span ng-repeat='data  in row.branch[col.field]'  > <span   class='glyphicon glyphicon-search' ng-if = 'data.superparentId'   ng-click='cellTemplateScope.click({{data}})'  >  </span> </span>",
                         cellTemplateScope: {
                      click: function(data) {
                          console.log("Data"); console.log(data);
            var modalInstance = $uibModal.open({
             animation: $scope.animationsEnabled,
             templateUrl:'app/views/myModalContent.html',
             controller: ['$scope',  '$uibModalInstance', function ($scope,  $uibModalInstance) {
             $scope.createTestPlanOptions = {
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'commandName', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'commandCategoryType', headerCellClass: $scope.highlightFilteredHeader},
                ]
            };
                promise = testScriptService.FetchCommands(userID, token);
                                    promise.then(
                                            function (data) {
                                               $scope.createTestPlanOptions.data =data;
                                            },
                                            function (err) {
                                                console.log(err);
                                            }
                                    );



               $scope.addCommand = function() {
                console.log("Data"); console.log(data);
             var superParentIndex =0;
              for(var i=0; i<$rootScope.tree_data[0].children.length ; i++){
                console.log('super parentId '+$rootScope.tree_data[0].children[i].id);

                if( data.superparentId == $rootScope.tree_data[0].children[i].id){
                    superParentIndex =i;
                    console.log(superParentIndex);
                }
            }
             var ParentIndex =0;
            for(var i=0; i<$rootScope.tree_data[0].children[superParentIndex].children.length ; i++){
                  if( data.parentId == $rootScope.tree_data[0].children[superParentIndex].children[i].id){
                    ParentIndex =i;
                    console.log(ParentIndex);
                }
            }

             var id = 0;
                 for(var i =0; i<$rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children.length; i++){

                    if(data.id == $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children[i].id){
                        id =i;

                    }
                 }

                 console.log(superParentIndex); console.log(ParentIndex); console.log(id);
           if($scope.entity){
          $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children[id].title=$scope.entity.commandName;
           $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children[id].entity =$scope.entity
      }

         $uibModalInstance.dismiss('cancel');

               }

             $scope.closePopup =function () {
                  $uibModalInstance.dismiss('cancel');
}


       $scope.createTestPlanOptions.onRegisterApi = function (gridApi) {
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                  console.log("rowrowrow");
                  console.log(row);
                  console.log("rowrowrow");
                $scope.entity =row.entity;
                    console.log(row.entity.commandName);

                });
                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
                });
            };

       }],
       size: 'md',
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

                          }
                           }
                   },

                {
                     field: "loop",
                        displayName: "Loop",
                        cellTemplate: "<span ng-if='row.branch[col.field] != 1010101'> <input  type='text'  ng-model='row.branch[col.field]'  size='3' />  </span>",

                   },
                   {
                field: "sequenceNo",
                        displayName: "Seq No",
                        cellTemplate: " <span ng-if='row.branch[col.field] != 1010101' > <input    ng-model='row.branch[col.field]'   size='3' /> </span>",
                         cellTemplateScope: {
                      click: function(data) {         // this works too: $scope.someMethod;
                       console.log(data);
                          }
                           }
                   },
                    {
                        field: "ids",
                        displayName: " ",
                        cellTemplate: " <a href='#'  ng-if='row.branch[col.field]'>        <span  ng-click='cellTemplateScope.click({{row.branch[col.field]}})'>  <span class='glyphicon glyphicon-plus'></span>  </span>      </a> ",

                         cellTemplateScope: {
                       click: function(ids) {


                        if(ids[0].id &&  !ids[0].parentId && !ids[0].superparentId ){
                          var largeNumber = 0;
                    for(var i =0; i<$rootScope.tree_data[0].children.length; i++){
                    for(var j=i+1; j< $rootScope.tree_data[0].children.length;j++)
                       if($rootScope.tree_data[0].children[i].id < $rootScope.tree_data[0].children[j].id ){
                         largeNumber = $rootScope.tree_data[0].children[j].id;
                       } else {
                         largeNumber = $rootScope.tree_data[0].children[i].id;
                         break;
                       }
                 }

                  if($rootScope.tree_data[0].children.length == 1) { largeNumber = $rootScope.tree_data[0].children[0].id };
              console.log(largeNumber);
            $rootScope.tree_data[0].children.push({ 'id': largeNumber+1 , 'title' : 'Task Executor', 'loop':1,'sequenceNo':1, 'ids':[{'id':largeNumber+1}],
             'children': [{'id': 1,    'title': 'Command Executor',  'loop':1,'sequenceNo':1, 'ids':[{'id':1, 'parentId': largeNumber+1}],
        'children': [ {'id': 1,     'title': 'Add Command'  ,  'loop':1,'sequenceNo':1, 'ids':[{'id':1, 'parentId': 1,'superparentId':largeNumber+1}]} ]  }   ]

              });
        }
         else if(ids[0].id &&  ids[0].parentId && !ids[0].superparentId ) {
            console.log("Command Executor");

               var parentIndex =0;
            for(var i=0; i<$rootScope.tree_data[0].children.length ; i++){
                if( ids[0].parentId == $rootScope.tree_data[0].children[i].id){
                    parentIndex =i;
                    console.log(parentIndex);
                }
            }

             var largeNumber = 0;
                 for(var i =0; i<$rootScope.tree_data[0].children[parentIndex].children.length; i++){
                    for(var j=i+1; j< $rootScope.tree_data[0].children[parentIndex].children.length;j++)
                       if($rootScope.tree_data[0].children[parentIndex].children[i].id < $rootScope.tree_data[0].children[parentIndex].children[j].id ){
                         largeNumber = $rootScope.tree_data[0].children[parentIndex].children[j].id;
                       } else {
                         largeNumber = $rootScope.tree_data[0].children[parentIndex].children[i].id;
                         break;
                       }
                 }


               if($rootScope.tree_data[0].children[parentIndex].children.length == 1) { largeNumber = $rootScope.tree_data[0].children[parentIndex].children[0].id;
                  console.log("IDDD"); console.log($rootScope.tree_data[0].children[parentIndex].children[0].id);
                };
          $rootScope.tree_data[0].children[parentIndex].children.push({ 'id': largeNumber+ 1 , 'title' : 'Command Executor',  'loop':1,'sequenceNo':1,
                   'ids':[{'id':largeNumber+ 1, 'parentId':ids[0].parentId }],
             'children':[{'id': 1,'title': 'Add Command' ,  'loop':1,'sequenceNo':1,
               'ids':[{'id':1, 'parentId':largeNumber+ 1,'superparentId': ids[0].parentId }]

              }] });
               }

         if(ids[0].id &&  ids[0].parentId && ids[0].superparentId ){
               var superParentIndex =0;
            for(var i=0; i<$rootScope.tree_data[0].children.length ; i++){
                if( ids[0].superparentId == $rootScope.tree_data[0].children[i].id){
                    superParentIndex =i;
                   }
            }
             var ParentIndex =0;
            for(var i=0; i<$rootScope.tree_data[0].children[superParentIndex].children.length ; i++){
                if( ids[0].parentId == $rootScope.tree_data[0].children[superParentIndex].children[i].id){
                    ParentIndex =i;
                  }
            }
             var largeNumber = 0;
                 for(var i =0; i<$rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children.length; i++){
                    for(var j=i+1; j< $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children.length;j++)
                       if($rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children[i].id < $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children[j].id ){
                         largeNumber = $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children[j].id;
                       } else {
                         largeNumber = $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children[i].id;
                         break;
                       }
                 }

               if($rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children.length == 1) {
                largeNumber = $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children[0].id;
                };
          $rootScope.tree_data[0].children[superParentIndex].children[ParentIndex].children.push(
            { 'id':largeNumber+ 1, 'title' : 'Add Command' ,  'loop':1,'sequenceNo':1,
              'ids':[{'id':largeNumber+ 1,  'parentId':ids[0].parentId ,'superparentId':ids[0].superparentId }] });

         }

                       }
                           }
                   },

                   {
                        field: "ids",
                        displayName: " ",
                        cellTemplate: "  <a href='#'> <span  ng-if='row.branch[col.field]' ng-click='cellTemplateScope.deleteRow({{row.branch[col.field]}})'> <span class='glyphicon glyphicon-minus'></span></span></a> ",

                         cellTemplateScope: {
                       deleteRow: function(ids) {
                        console.log(ids);

                      if(ids[0].id &&  !ids[0].parentId && !ids[0].superparentId ){
                       var id = 0;
                    for(var i =0; i<$rootScope.tree_data[0].children.length; i++){
                      if($rootScope.tree_data[0].children[i].id == ids[0].id){
                            id =i;
                           break;
               }
                 }
                     $rootScope.tree_data[0].children.splice(id, 1);
                            }

                            else if( ids[0].id &&  ids[0].parentId && !ids[0].superparentId){
                                var id = 0,parentId=0 ;

                                 for(var i =0; i<$rootScope.tree_data[0].children.length; i++){
                              if($rootScope.tree_data[0].children[i].id == ids[0].parentId){
                              parentId =i;
                             break;
                    }
                 }
                         for(var i=0; i<$rootScope.tree_data[0].children[parentId].children.length; i++){

                            if($rootScope.tree_data[0].children[id].children[i].id == ids[0].id ){
                                id =i; break;
                            }
                         }

                          $rootScope.tree_data[0].children[parentId].children.splice(id, 1);

                            }

                             else if( ids[0].id &&  ids[0].parentId && ids[0].superparentId){
                                var id = 0,parentId=0 ,superparentId =0;

                                 for(var i =0; i<$rootScope.tree_data[0].children.length; i++){
                                   if($rootScope.tree_data[0].children[i].id == ids[0].superparentId){
                                        superparentId =i;
                                        break;
                                       }
                                 }
                         for(var i=0; i<$rootScope.tree_data[0].children[superparentId].children.length; i++){

                            console.log($rootScope.tree_data[0].children[superparentId].children[i].id);
                            console.log(ids[0].parentId);

                            if($rootScope.tree_data[0].children[superparentId].children[i].id == ids[0].parentId ){
                                parentId =i; break;
                            }
                         }

                          for(var i=0; i<$rootScope.tree_data[0].children[superparentId].children.length; i++){
                            if($rootScope.tree_data[0].children[superparentId].children[i].id == ids[0].parentId ){
                                parentId =i; break;
                            }
                         }

                         for(var i=0; i<$rootScope.tree_data[0].children[superparentId].children[parentId].children.length; i++){

                            if($rootScope.tree_data[0].children[superparentId].children[parentId].children[i].id == ids[0].id ){
                                id =i; break;
                            }
                         }
                           $rootScope.tree_data[0].children[superparentId].children[parentId].children.splice(id, 1);
                            }
                        }
                           }
                   }
                ];



 $scope.createTestPlanService121 = function (flag) {


$rootScope.Message=flag;
       $('#MessageColor').css("color", "red");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);

 /*   var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'app/views/createTestPlanPopup.html',
      controller: ['$scope',  '$uibModalInstance', function ($scope,  $uibModalInstance) {

         $scope.closePopup =function () {
                  $uibModalInstance.dismiss('cancel');
}


      }],
      size: 'sm',
     
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });*/
  };







        });
