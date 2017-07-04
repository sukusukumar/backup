//
//
//$(document).ready(function () {
//    alert("ready!");
//
//    $.ajax({
//        url: "http://10.10.52.147:8080/IAPORTAL/user/authenticate",
//        type: "POST",
//        data: {username: 'admin', password: 'admin'},
//        headers: {
//            'Content-Type': 'application/x-www-form-urlencoded'
//        },
//        success: function (data)
//        {
//           aley(jquery.post());
//            $.cookie('token', data.token);
//            $.cookie('userid', data.userId)
//
//        },
//        error: function (err)
//        {
//            deferred.reject(err);
//        }
//    });
//
//    var $table = $('table.scroll'),
//            $bodyCells = $table.find('tbody tr:first').children(),
//            colWidth;
//
//// Adjust the width of thead cells when window resizes
//    $(window).resize(function () {
//        // Get the tbody columns width array
//        colWidth = $bodyCells.map(function () {
//            return $(this).width();
//        }).get();
//
//        // Set the width of thead columns
//        $table.find('thead tr').children().each(function (i, v) {
//            $(v).width(colWidth[i]);
//        });
//    }).resize(); // Trigger resize handler
//
//
////Tree api
//    alert($.cookie('token'));
//    $.ajax({
//        url: "http://localhost:8080/IAPORTAL/rest/testPlan/fetchCommands",
//        type: "POST",
//        data: {token: $.cookie('token')},
//        headers: {
//            'Content-Type': 'application/x-www-form-urlencoded'
//        },
//        success: function (data)
//        {
//
//            var commands = data;
//
//
//            //Tree Structure start
//            var Test = [{
//                    commandName: "Task_(-2)_" + Date(), Folder: [
//                        /*{
//                         Text: "testexe", Value: "Folder",  Folder: [
//                         {
//                         Text: "Commandexe", Value: "Folder",  Folder:[
//                         
//                         ]
//                         }
//                         
//                         
//                         ]
//                         
//                         
//                         }*/
//                    ]
//                }]
//            var TaskName = Test[0].commandName;
//            alert('TaskName:'+TaskName);
//            var dataarray = [];
//            var patharray = [];
//            var testexeArray = [];
//            var commandexeArray = [];
//            var x = 0;
//            var y = 0;
//            var count = -1;
//            var cmdcount;
////            var textexecount = 0;
//            var tt = -1;
//            var t1 = 1, c1 = 1, t11 = -1;
//            var f, g = 0, h = 0;
//            var k;
//            var i = 0;
//            var a = [];
//            var obj = null;
//            var data = [];
//            var dum = 0;
//            var z, h;
//            var selection;
//            var gen;
//            //var dup1=0,d = "";
//            var aa = [];
//            var aat = -1;
//            var o, del;
//            var s = 0;
//            var vr, vm, l, p;
//            var kl;
//            var arrch;
//            var cmdred;
//            var pathsli;
//            var cmdcmd;
//            var data1 = [];
//            var stand = new Date();
//            stand = "Task_(-2)_" + stand;
//
//            $(".displaynone").hide();
//            //Bind
//            $(document).delegate("#firstTree", "igtreenodedropped", function (evt, ui) {
//                //return reference to the binding.
//                ui.binding;
//                //return reference to the data.
//                ui.data;
//                //return reference to the draggable element (the node).
//                ui.draggable
//                //return reference to the element.
//                ui.element;
//                //return reference to the helper.
//                ui.helper;
//                //return reference to the offset.
//                ui.offest;
//                //return to get a reference to the original position of the draggable element (the node).
//                ui.orginalPosition
//                //return reference to the node path.
//                ui.path
//                //return reference to the current position of the draggable element.
//                ui.position
//            });
//
//
//
//            $("#firstTree").igTree({
//                singleBranchExpand: true,
//                dataSource: commands,
//                dataSourceType: 'json',
//                initialExpandDepth: 0,
//                pathSeparator: '.',
//                bindings: {
//                    textKey: 'commandName',
//                    valueKey: 'Value',
//                    imageUrlKey: 'ImageUrl',
//                    childDataProperty: 'Folder',
//                    nodeContentTemplate: "<td>${commandName}</td> <td class='slice'>${commandCategoryType}</td>"
//                },
//                dragAndDrop: true,
//                dragStart: function (evt, ui) {
//                    console.log("Dropeed: " + JSON.stringify(ui))
//                    console.log("name of dropped: " + ui.data.commandName);
////                    console.log("drag start: " + JSON.stringify(ui))
//                    var dataobj = ui.data;
//                    dataarray.push(dataobj);
//
//                }
//            });
//
//
//
//            $(function () {
//                $("#secondTree").igTree({
//                    singleBranchExpand: true,
//                    dataSource: Test,
//                    dataSourceType: 'json',
//                    initialExpandDepth: 0,
//                    pathSeparator: '.',
//                    bindings: {
//                        textKey: 'commandName',
//                        valueKey: 'Value',
//                        imageUrlKey: 'ImageUrl',
//                        childDataProperty: 'Folder',
//                        nodeContentTemplate: "<td ><span class='cmdName'>${commandName}</span><input type='text' id='dispName' class='displaynone' value='${commandName}'><img src='http://igniteui.com/images/samples/tree/bin_empty.png' data-role='delete-node' title='Delete this node.' /></td>"
//                    },
//                    dragAndDrop: true,
////         
//                    nodeDropping: function (evt, ui) {
////                                console.log('evt: '+JSON.stringify(ui));
//                        /*dup1 = ui.draggable.first().text();	
//                         console.log(d);
//                         if (d.indexOf(dup1)){
//                         alert("single copy");
//                         }else{
//                         alert("duplicate copy");
//                         dragAndDropMode  : false;
//                         //dragAndDrop : false;
//                         
//                         
//                         } */
//
//                    },
//                    nodeDropped: function (evt, ui) {
//
//
//
////                        $("#mylist li").length;
////$( "" ).css( 'background-color', 'red' );
//                        console.log("ui of second tree: " + JSON.stringify(ui))
//                        var testexeobj = ui.data.commandName;
//                        testexeArray.push(testexeobj);
////                        alert('testexeArray: '+ testexeArray.length);
//                        var commandexeobj = ui.data.Folder;
//                        commandexeArray.push(commandexeobj);
//                        alert('commandexeArray: ' + commandexeArray.length);
//                        var str = ui.data.Folder[0].commandName;
//                        alert(str)
//                        var strtest = str.slice(0, 7);
////                        alert('strtest: '+ strtest)
////                      var parent = $( "#secondTree" ).parent().indexl;
////                      alert('parent:'+parent)
////                        alert("Node Dropped: "+ui.path);
//
//                        var b = ui.path;
//                        var Arraypath = patharray.push(b);
////                        alert('Arraypath: '+Arraypath);
//                        if (ui.path == '0') {
//                            x = x + 1;
////                            alert('x: ' + x);
//                        }
//                        if (ui.path == '0.0') {
//                            y = y + 1;
////                            alert('y: ' + y);
//                        }
//
//
//
//
//
////                                console.log("Droopeed UI: "+JSON.stringify(ui))
//
//                        pathsli = ui.path;
//
//                        pathsli = pathsli.slice(-1);
//                        //alert(pathsli);
//                        z = ui.data.commandName;
//                        z = z.slice(-1);
//                        //alert(z);
//                        gen = ui.data.commandName;
//                        gen = gen.substring(0, gen.length - 1);
//
////                        alert(ui.data.commandName);
//
////                        alert(stand);
//
//                        if (ui.data.commandName == stand) {
//                            var textCntnt = ui.draggable.first().text();
//                            var lastIndex = textCntnt.lastIndexOf(" ");
////                                    console.log(textCntnt);
//                            var res = textCntnt.slice(0, lastIndex);
////                                  ui.draggable.first().html()
////                                    var truncate = function () {
////                                       
////                                        var $elem = $('label.truncate');
////                                   
////                                        var html = $elem.html().split(/>\s*</);
////                                        if (html.length > 10)
////                                            html = "... <" + html.slice(-6).join('> <');
////
////                                        $elem.html(html);
////                                    }
////                                    truncate();
//
//                            tt = tt + 1;
//                            t11 = t11 + 1;
//                            dum = 0;
//                            textexecount = 0;
//                            count = count + 1;
//                            aat = aat + 1;
//                            aa[aat] = 0;
//
//                            $("#secondTree").igTree("addNode", {
//                                "commandName": "Task Exec",
//                                "Folder": [{
//                                        "commandName": "Cmd Exec",
//                                        "Folder": [{
//                                                "commandName": res
//                                            }]
//                                    }]
//                            }, ui.element);
////                            console.log(ui.element);
//                            var sum = "0." + count;
//                            $("#secondTree").igTree("removeAt", sum);
//                            testexe = "testexe" + t1;
//                            commandexe = "commandexe" + c1;
//                            t1 = t1 + 1;
////                            console.log('t1: '+ t1);
//
//                            c1 = c1 + i;
//
//
//                            h = testexe.slice(-1);
//                            k = ui.element;
//                            i = i + 1;
//                        } else if ((ui.data.commandName == testexe) || (gen == "testexe")) {
//                            var textCntnt = ui.draggable.first().text();
//                            var lastIndex = textCntnt.lastIndexOf(" ");
////                                    console.log(textCntnt);
//                            var res = textCntnt.slice(0, lastIndex);
//                            //alert("yd");
//                            aa[pathsli] = aa[pathsli] + 1;
//                            //textexecount = textexecount+1;
//                            $("#secondTree").igTree("addNode", {
//                                "commandName": "Commandexe" + c1,
//                                "Folder": [{
//                                        "commandName": res
//                                    }]
//
//                            }, ui.element);
//                            dum = dum + 1;
//                            var testexepath = ui.path;
//                            tt = testexepath.slice(-1);
//                            textexecount = aa[tt];
//                            var sum = "0." + tt + "." + textexecount;
////                            console.log(sum);
//                            $("#secondTree").igTree("removeAt", sum);
//                            commandexe = "Commandexe" + c1;
//                            c1 = c1 + 1;
//                        } else if ((ui.data.commandName == "Commandexe") && (ui.data.commandName == commandexe)) {
//
//                        }
//                        /*else if((z < h)&&(gen == "testexe")){
//                         
//                         
//                         var kkt =pathsli;
//                         aa[kkt] = aa[kkt]+1;
//                         var ne = ui.data.Text ;
//                         f =ne.slice(-1);
//                         del = f;
//                         f = f-1;
//                         var b = Number(f);
//                         
//                         p = (b);
//                         
//                         
//                         $("#secondTree").igTree("addNode", {
//                         
//                         "Text": "Commandexe"+c1,
//                         "Folder":[{
//                         "Text": ui.draggable.first().text()
//                         }]
//                         
//                         },ui.element); 
//                         aa[p] =aa[p];
//                         o = aa[p];
//                         console.log(o);
//                         //console.log("a[1]:" ,a[1]);
//                         sum = "0."+f+"."+o;
//                         //alert(vm);
//                         //	alert(z);
//                         //	alert(t1);
//                         if ( (s == "1")&&(vr < del))
//                         {
//                         //alert("here");
//                         f = f-1;
//                         o = o+1;
//                         
//                         
//                         if ((vm == "Commandexe")&&(z<(t1-1)))
//                         {
//                         //	alert("next");
//                         //f = f+1;
//                         //	o = o-1;
//                         //	alert(ui.path);
//                         var nextpath = ui.path;
//                         nextpath = nextpath.slice(-1);
//                         var nn = aa[nextpath];
//                         console.log("newtrail:", nextpath);
//                         console.log(nn);
//                         f = nextpath;
//                         o = nn;
//                         
//                         }
//                         sum = "0."+f+"."+o;
//                         console.log("sum", sum);
//                         }
//                         
//                         console.log(sum);
//                         $("#secondTree").igTree("removeAt" , sum);//0.0.1
//                         
//                         c1 = c1+1;
//                         
//                         } */
//
////                        var parentNode = $("#secondTree").igTree("parentNode", targetNode);
//
//                        obj = $("#secondTree").igTree("children", k);
////                        console.log('obj: ' + JSON.stringify(obj))
//                        d = $('#secondTree a:last-child').text();
//
//
//                    },
//                    dragAndDropSettings: {
//                        allowDrop: true,
//                        dragAndDropMode: 'copy',
//                        customDropValidation: function (element) {
//                            // Validates the drop target
//                            var valid = true,
//                                    droppableNode = $(this);
//
//
//                            if (droppableNode.is('a') && droppableNode.closest('li[data-role=node]').attr('data-value') === 'File') {
//                                valid = false;
//                            }
//
//                            return valid;
//                        }
//                    }
//
//
//
//
//                });
//
//            });
//
//
//
//            //node dropped
//
//
//            $(document).delegate("#secondTree", "igtreenodedropping", function (evt, ui) {
//                //return reference to the binding.
//                ui.binding;
//                //return reference to the data.
//                ui.data;
//                //return reference to the draggable element (the node).
//                ui.draggable
//                //return reference to the element.
//                ui.element;
//                //return reference to the helper.
//                ui.helper;
//                //return reference to the offset.
//                ui.offest;
//                //return to get a reference to the original position of the draggable element (the node).
//                ui.path
//                //return reference to the current position of the draggable element.
//                ui.position
//            });
//
//            // deleting
//
//            $(document).on('click', 'img[data-role=delete-node]', function () {
//                alert("test delete")
//                var node = $(this).closest('li');
//                $('#secondTree').igTree('removeAt', node.attr('data-path'));
////$(span.cmdName).hide();
//            });
//            $(document).on('click', 'span.cmdName', function () {
//                var TaskName = $('#dispName').val();
//                $(this).hide();
//                console.log("this: ", $(this).next().attr('class'));
//                $(this).next().removeClass("displaynone");
//
////                 if (e.target.class == 'span.cmdName') {
////                        $(this).hide();
////                         $(this).next().removeClass("displaynone");
////                    } else {
////                         $(this).show();
////                          $(this).next().addClass("displaynone");
////                    }
//
//            });
//
//            $("#secondTree").on("igtreeselectionchanged", function (e, ui) {
//                selection = ui.selectedNodes[0].path;
//                //alert(selection);
//                vr = ui.newNodes[0].data.Text;
//                vm = vr;
////                vr = vr.slice(-1);
//                vr = Number(vr);
//                vm = vm.substring(0, vm.length - 1);
//                cmdred = selection.substring(2, selection.length - 2);
//                //alert("cmdred");
//                //alert(cmdred);
//                cmdcmd = "0." + cmdred;
//                //alert(cmdcmd);
//                l = selection.slice(0, selection.length - 1);
//
//                m = ui.newNodes[0].data.Text;
//                m = m.slice(-1);
//                m = Number(m);
//                arrch = selection.slice(-1);
//                arrch = Number(arrch);
//                //alert(arrch);
//
//                if ((l == "0.")) {
//                    //console.log("arrch",arrch);
//
//                    for (var ne = arrch; ne < (t11); ne++) {
//                        aa[ne] = aa[ne + 1];
//
//
//                    }
//
//                }
//                if (vm == "Commandexe") {
//
//                    aa[cmdred] = aa[cmdred] - 1;
//
//                }
//
//
//            });
//
//
//
//
//
//            $("#next").click(function () {
//                
//                
//                
//                                data = [];
//                angular.forEach(obj, function (value, key) {
//                    console.log('value: '+value);
//                    var cmdexe = [];
//                    angular.forEach(value.data.Folder, function (value1, key1) {
//                        var cmd = [];
//                        angular.forEach(value1.Folder, function (value2, key2) {
//                            cmd.push({"commandId": value2.commandName});
//                        });
//                        cmdexe.push({"commandExecutorName": value1.commandName, "commandExecutorCommandVOList": cmd});
//                    });
//                    data.push({"taskExecutorName": value.data.commandName, "commandExecutorVOList": cmdexe});
//                });
//                  console.log("Data : "+JSON.stringify(data));
//                
//                //Post data
//                var test_plan = $("#test_plan").val();
//                var fullDate = new Date()
//                console.log(fullDate);
////Thu May 19 2011 17:25:38 GMT+1000 {}
//
////convert month to 2 digits
//                var fullDate = new Date();
//                
//                var twoDigitMonth = fullDate.getMonth() + "";
//                if (twoDigitMonth.length == 1)
//                    twoDigitMonth = "0" + twoDigitMonth;
//                var twoDigitDate = fullDate.getDate() + "";
//                if (twoDigitDate.length == 1)
//                    twoDigitDate = "0" + twoDigitDate;
//                var currentDate = fullDate.getFullYear() + "/" + twoDigitMonth + "/" +twoDigitDate ;
//                var lastTriggeredRunDateTimeUTC = fullDate.setDate(fullDate.getDate());
//                var jobEndDate = fullDate.getDate()+30; 
//                console.log('jobEndDate: '+ jobEndDate)
//               
//
//                var Creat_data = {
//                    "jobName": test_plan,
//                    "jobDescription": test_plan,
//                    "taskId": 0,
//                    "jobCreatedBy": -2,
//                    "jobCreateDate": currentDate,
//                    "jobStartDate": currentDate,
//                    "jobEndDate": jobEndDate,
//                    "scheuleGroupId": 0,
//                    "jobStartDateTime": currentDate,
//                    "deviceGroupId": 0,
//                    "recurrence": "Daily", "isCompleted": "N", "runNum": 0,
//                    "lastTriggeredRunDateTimeUTC": lastTriggeredRunDateTimeUTC,
//                    "taskVOList": [{
//                            "taskName": TaskName,
//                            "taskLoop": "1",
//                            "taskCreated": currentDate,
//                            "taskDescription": "",
//                            "taskCreatedBy": -2, "useCaseId": $.cookie('token'),
//                            "taskExecutorVOList": [{"taskExecutorName": "tstexe",
//                                    "commandExecutorVOList": [{"commandExecutorName": "cmd exec 3",
//                                            "commandExecutorCommandVOList": [{"commandId": 1, "commandSeqNo": 1, "commandExecutorId": 1, "commandParams": "actionduration=1m"},
//                                                {"commandId": 2, "commandSeqNo": 4, "commandExecutorId": 1, "commandParams": "actionduration=2m,collectinterval=60s"},
//                                            ]
//                                        }]
//                                }]
//                        }]
//                }
//
//            });
////}                  
//
//            function next() {
////                alert("test");
//                data = [];
//                angular.forEach(obj, function (value, key) {
//                    var cmdexe = [];
//                    angular.forEach(value.data.Folder, function (value1, key1) {
//                        var cmd = [];
//                        angular.forEach(value1.Folder, function (value2, key2) {
//                            cmd.push({"cmdName": value2.Text});
//                        });
//                        cmdexe.push({"commandExecutorName": value1.Text, "commandExecutorCommandVOList": cmd});
//                    });
//                    data.push({"taskExecutorName": value.data.Text, "commandExecutorVOList": cmdexe});
//                });
//                //console.log(JSON.stringify(data));
//
//
//
//            }
//            function delete1() {
//
//                $("#secondTree").igTree("removeAt", selection);
//                obj = $("#secondTree").igTree("children", k);
//                s = 1;
//
//                if ((l == "0.")) {
//                    //	alert("1");
//                    tt = tt - 1;
//                    count = count - 1;
//
//                    t11 = t11 - 1;
//
//                }
//
//                if (m < (t1) && (vm != "Commandexe")) {
//
//                    var kl = 0;
//                    //alert("3");
//                    for (var f = 0; f <= t11; f++) {
//
//                        kl++;
//                        a[f] = a[kl];
//
//
//                    }
//                }
//                if ((vm == "Commandexe") && (z < (t11)))
//                {
//
//                    //alert("4");
//
//                    kl = l.substring(2, l.length - 1);
//
//                    a[kl] = a[kl] - 1;
//
//                }
//
//
//
//            }
//
//
//            function check() {
//
//                for (var rrr = 0; rrr < (t1); rrr++) {
////                    console.log(aa[rrr]);
//                }
//            }
//        },
//        error: function (err)
//        {
//            //                            console.log(err);
//            //                            deferred.reject(err);
//        }
//    });
//
//});