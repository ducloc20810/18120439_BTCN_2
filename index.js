
		function XuLi()
		{
			var x = document.getElementsByName("Tick");
			console.log(x.length);
			for(var i=0;i<x.length;i++)
			{
				if(x[i].checked)
				{
					switch(x[i].value){
						case "Cong":
							Cong();
							break;

						case "Tru":
							Tru();
							break;

						case "Nhan":
							Nhan();
							break;

						case "Chia":
							Chia();
							break;

						default:
							break;
					}
					return;
				}
			}
			document.getElementById("Output").innerHTML="Hãy chọn một phép tính";
		}

		function KiemTra(num1,num2)
		{
			let flagemty1=0;
			let flagemty2=0;
			let flag1=0;
			let flag2=0;
			if(num1.length==0)
				flagemty1=1;
			else {
				if(isNaN(+num1))
				flag1=1;
			}

			if(num2.length==0)
				flagemty2=1;
			else
			{
				if(isNaN(+num2))
				flag2=1;
			}
			if(flagemty1==1 && flagemty2==1)
				return -4;
			if(flagemty1==1 && flagemty2==0)
			{
				return -3;
			}
			if(flagemty1==0 &&flagemty2==1)
			{
				return -2;
			}
			if(flag1==1 && flag2==1)
			{
				return -1;
			}
			if(flag1==1 && flag2==0)
			{
				return 1;
			}
			if(flag1==0 && flag2==1)
			{
				return 2;
			}
			return 0;
		}
		function Cong()
		{
			const num1=document.getElementById("number1").value;
			const num2=document.getElementById("number2").value;
			const check=KiemTra(num1,num2);
			if(check==0)
			{
				let ketqua=parseInt(num1)+parseInt(num2);
				document.getElementById("DapAn").value=ketqua;
				document.getElementById("Output").innerHTML=" ";
				return;
			}
			if(check==-4)
			{
				let s="2 ô trống";
				document.getElementById("Output").innerHTML="Hãy nhập vào " + s.italics()+ " một con số";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-3)
			{
				let s="Số thứ nhất"
				document.getElementById("Output").innerHTML="Giá trị nhập ở " + s.italics()+" không được để trống";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-2)
			{
				let s="Số thứ hai"
				document.getElementById("Output").innerHTML="Giá trị nhập ở ô "+s.italics()+" không được để trống";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-1)
			{
				let s="Số thứ nhất và Số thứ hai";
				document.getElementById("Output").innerHTML="Giá trị nhập ở " +s.italics()+" không phải là số";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==1)
			{
				let s="Số thứ nhất"
				document.getElementById("Output").innerHTML="Giá trị nhập ở "+s.italics()+" không phải là số"
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==2)
			{
				let s="Số thứ hai"
				document.getElementById("Output").innerHTML="Giá trị nhập ở "+s.italics()+" không phải là số";
				document.getElementById("DapAn").value="";
				return;
			}
		}
		function Tru()
		{
			var num1=document.getElementById("number1").value;
			var num2=document.getElementById("number2").value;
			const check=KiemTra(num1,num2);
			if(check==0)
			{
				let ketqua=parseInt(num1)-parseInt(num2);
				document.getElementById("DapAn").value=ketqua;
				document.getElementById("Output").innerHTML=" ";
				return;
			}
			if(check==-4)
			{
				let s="2 ô trống";
				document.getElementById("Output").innerHTML="Hãy nhập vào " + s.italics()+ " một con số";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-3)
			{
				let s="Số thứ nhất"
				document.getElementById("Output").innerHTML="Giá trị nhập ở " + s.italics()+" không được để trống";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-2)
			{
				let s="Số thứ hai"
				document.getElementById("Output").innerHTML="Giá trị nhập ở ô "+s.italics()+" không được để trống";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-1)
			{
				let s="Số thứ nhất và Số thứ hai";
				document.getElementById("Output").innerHTML="Giá trị nhập ở " +s.italics()+" không phải là số";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==1)
			{
				let s="Số thứ nhất"
				document.getElementById("Output").innerHTML="Giá trị nhập ở "+s.italics()+" không phải là số"
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==2)
			{
				let s="Số thứ hai"
				document.getElementById("Output").innerHTML="Giá trị nhập ở "+s.italics()+" không phải là số";
				document.getElementById("DapAn").value="";
				return;
			}
		}
		function Nhan()
		{
			var num1=document.getElementById("number1").value;
			var num2=document.getElementById("number2").value;
			const check=KiemTra(num1,num2);
			if(check==0)
			{
				let ketqua=parseInt(num1)*parseInt(num2);
				document.getElementById("DapAn").value=ketqua;
				document.getElementById("Output").innerHTML=" ";
				return;
			}
			if(check==-4)
			{
				let s="2 ô trống";
				document.getElementById("Output").innerHTML="Hãy nhập vào " + s.italics()+ " một con số";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-3)
			{
				let s="Số thứ nhất"
				document.getElementById("Output").innerHTML="Giá trị nhập ở " + s.italics()+" không được để trống";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-2)
			{
				let s="Số thứ hai"
				document.getElementById("Output").innerHTML="Giá trị nhập ở ô "+s.italics()+" không được để trống";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-1)
			{
				let s="Số thứ nhất và Số thứ hai";
				document.getElementById("Output").innerHTML="Giá trị nhập ở " +s.italics()+" không phải là số";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==1)
			{
				let s="Số thứ nhất"
				document.getElementById("Output").innerHTML="Giá trị nhập ở "+s.italics()+" không phải là số"
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==2)
			{
				let s="Số thứ hai"
				document.getElementById("Output").innerHTML="Giá trị nhập ở "+s.italics()+" không phải là số";
				document.getElementById("DapAn").value="";
				return;
			}
		}

		function Chia()
		{
			var num1=document.getElementById("number1").value;
			var num2=document.getElementById("number2").value;
			const check=KiemTra(num1,num2);
			if(check==0)
			{
				let ketqua=parseInt(num1)/parseInt(num2);
				document.getElementById("DapAn").value=ketqua;
				document.getElementById("Output").innerHTML=" ";
				return;
			}
			if(check==-4)
			{
				let s="2 ô trống";
				document.getElementById("Output").innerHTML="Hãy nhập vào " + s.italics()+ " một con số";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-3)
			{
				let s="Số thứ nhất"
				document.getElementById("Output").innerHTML="Giá trị nhập ở " + s.italics()+" không được để trống";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-2)
			{
				let s="Số thứ hai"
				document.getElementById("Output").innerHTML="Giá trị nhập ở ô "+s.italics()+" không được để trống";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==-1)
			{
				let s="Số thứ nhất và Số thứ hai";
				document.getElementById("Output").innerHTML="Giá trị nhập ở " +s.italics()+" không phải là số";
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==1)
			{
				let s="Số thứ nhất"
				document.getElementById("Output").innerHTML="Giá trị nhập ở "+s.italics()+" không phải là số"
				document.getElementById("DapAn").value="";
				return;
			}
			if(check==2)
			{
				let s="Số thứ hai"
				document.getElementById("Output").innerHTML="Giá trị nhập ở "+s.italics()+" không phải là số";
				document.getElementById("DapAn").value="";
				return;
			}
		}