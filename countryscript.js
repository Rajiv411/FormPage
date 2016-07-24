// alert("check");

function addOption(select,text,value)
{
	var obj=document.createElement("option");//<option></option>
	
	obj.text=text;
	obj.value=value;
	// <option value="">text</option>
	select.options.add(obj);
}

var country=new Array("Select Country","India","Japan","China","Pakishtan","US");
var india=new Array("Select State","AP","UP","MP","TS");
var japan=new Array("Select State","CoreCity","SpecialCity","SpecialWard","Seto");
var china=new Array("Select State","Guangzhou","Shanghai","Chongqing","Beijing");
var pak=new Array("Select State","Lasbela","Khusdar","Turbat","Quette");
var US=new Array("Select State","California","Illinois","Texas","Newyork");

var State=new Array("Select State","AP","UP","MP","TS");
var AP=new Array("Select City","Guntur","Nellore","Kurnool","Tirupati");
var UP=new Array("Select City","Allahabad","Varanasi","Lucknow","Kanpur");
var MP=new Array("Select City","Indor","Bhopal","Jabalpur","Gwalior");
var TS=new Array("Select City","Hyderabad","Karimnagar","Warangal","Nalgonda");

var State=new Array("Select State","Lasbela","Khusdar","Turbat","Quette");
var Lasbela=new Array("Select City","Nagoya","Handa","Toyakawa","Kariya");
var Khusdar=new Array("Select City","Hekinan","Okazai","Ichinomiya","Kariya");
var Turbat=new Array("Select City","Nishio","Anjo","Konam","Konake");
var Quette=new Array("Select City","Towada","Amore","Chiba","Nagasake");

var State=new Array("Select State","Guangzhou","Shanghai","Chongqing","Beijing");
var Guangzhou=new Array("Select City","Xinyang","Liaohing","Maoming","Jiaxing");
var Shanghai=new Array("Select City","Tianshiue","Huazhog","Quing","Wuhu");
var Chongqing=new Array("Select City","Zhji","Anjo","Xingtal","Wuhu");
var Beijing=new Array("Select City","Ezhou","Benxi","Linha","Wuwei");

var State=new Array("Select State","CoreCity","SpecialCity","SpecialWard","Seto");
var CoreCity=new Array("Select City","Xinyang","Liaohing","Maoming","Jiaxing");
var SpecialCity=new Array("Select City","Tianshiue","Huazhog","Quing","Wuhu");
var SpecialWard=new Array("Select City","Zhji","Anjo","Xingtal","Wuhu");
var Seto=new Array("Select City","Ezhou","Benxi","Linha","Wuwei");

var State=new Array("Select State","California","Illinois","Texas","Newyork");
var California=new Array("Select City","SanFrancisco","Fremont","SanJose","Vegas");
var Illinois=new Array("Select City","Chicago","Schaumburg","Devon","Rosemont");
var Texas=new Array("Select City","Dallas","Austin","Irving","Plano");
var Newyork=new Array("Select City","Buffalo","Albany","Ithaca","NewYork City");





function selCountry(){
	//alert("check");
	addOption(document.getElementById("countries"),country[0],"");
	for(i=1;i<country.length;i++)
	{
		addOption(document.getElementById("countries"),country[i],country[i]);
		
	}
}


function selState()
{
	//alert("checking");
	document.getElementById("states").options.length=0;
	if(document.getElementById("countries").value=='')
	{
		document.getElementById("states").style.display='none';
		
	}
	if(document.getElementById("countries").value=='India')
	{
		for(i=0;i<india.length;i++)
		{
			addOption(document.getElementById("states"),india[i],india[i]);
			
		}
		
	}
	if(document.getElementById("countries").value=='Japan')
	{
		for(i=0;i<japan.length;i++)
		{
			addOption(document.getElementById("states"),japan[i],japan[i]);
			
		}
		
	}
	if(document.getElementById("countries").value=='China')
	{
		for(i=0;i<china.length;i++)
		{
			addOption(document.getElementById("states"),china[i],china[i]);
			
		}
		
	}
	if(document.getElementById("countries").value=='Pakishtan')
	{
		for(i=0;i<pak.length;i++)
		{
			addOption(document.getElementById("states"),pak[i],pak[i]);
			
		}
		
	}
	if(document.getElementById("countries").value=='US')
	{
		for(i=0;i<US.length;i++)
		{
			addOption(document.getElementById("states"),US[i],US[i]);
			
		}
		
	}
	
}

function selCity()
{
	//alert("checking");
	document.getElementById("city").options.length=0;
	if(document.getElementById("states").value=='')
	{
		document.getElementById("city").style.display='none';
		
	}
	if(document.getElementById("states").value=='AP')
	{
		for(i=0;i<AP.length;i++)
		{
			addOption(document.getElementById("city"),AP[i],AP[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='UP')
	{
		for(i=0;i<UP.length;i++)
		{
			addOption(document.getElementById("city"),UP[i],UP[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='MP')
	{
		for(i=0;i<MP.length;i++)
		{
			addOption(document.getElementById("city"),MP[i],MP[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='TS')
	{
		for(i=0;i<TS.length;i++)
		{
			addOption(document.getElementById("city"),TS[i],TS[i]);
			
		}
		
	}


	
	if(document.getElementById("states").value=='Lasbela')
	{
		for(i=0;i<Lasbela.length;i++)
		{
			addOption(document.getElementById("city"),Lasbela[i],Lasbela[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Khusdar')
	{
		for(i=0;i<Khusdar.length;i++)
		{
			addOption(document.getElementById("city"),Khusdar[i],Khusdar[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Turbat')
	{
		for(i=0;i<Turbat.length;i++)
		{
			addOption(document.getElementById("city"),Turbat[i],Turbat[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Quette')
	{
		for(i=0;i<Quette.length;i++)
		{
			addOption(document.getElementById("city"),Quette[i],Quette[i]);
			
		}
		
	}


    if(document.getElementById("states").value=='Guangzhou')
	{
		for(i=0;i<Guangzhou.length;i++)
		{
			addOption(document.getElementById("city"),Guangzhou[i],Guangzhou[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Shanghai')
	{
		for(i=0;i<Shanghai.length;i++)
		{
			addOption(document.getElementById("city"),Shanghai[i],Shanghai[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Chongqing')
	{
		for(i=0;i<Chongqing.length;i++)
		{
			addOption(document.getElementById("city"),Chongqing[i],Chongqing[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Beijing')
	{
		for(i=0;i<Beijing.length;i++)
		{
			addOption(document.getElementById("city"),Beijing[i],Beijing[i]);
			
		}
		
	}
	
	if(document.getElementById("states").value=='CoreCity')
	{
		for(i=0;i<CoreCity.length;i++)
		{
			addOption(document.getElementById("city"),CoreCity[i],CoreCity[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='SpecialCity')
	{
		for(i=0;i<SpecialCity.length;i++)
		{
			addOption(document.getElementById("city"),SpecialCity[i],SpecialCity[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='SpecialWard')
	{
		for(i=0;i<SpecialWard.length;i++)
		{
			addOption(document.getElementById("city"),SpecialWard[i],SpecialWard[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Seto')
	{
		for(i=0;i<Seto.length;i++)
		{
			addOption(document.getElementById("city"),Seto[i],Seto[i]);
			
		}
		
	}
	
	
	if(document.getElementById("states").value=='California')
	{
		for(i=0;i<California.length;i++)
		{
			addOption(document.getElementById("city"),California[i],California[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Illinois')
	{
		for(i=0;i<Illinois.length;i++)
		{
			addOption(document.getElementById("city"),Illinois[i],Illinois[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Texas')
	{
		for(i=0;i<Texas.length;i++)
		{
			addOption(document.getElementById("city"),Texas[i],Texas[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='NewYork')
	{
		for(i=0;i<NewYork.length;i++)
		{
			addOption(document.getElementById("city"),NewYork[i],NewYork[i]);
			
		}
		
	}
}


