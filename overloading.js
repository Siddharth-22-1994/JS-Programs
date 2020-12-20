								
								// Overloading
class overload
{
	sum(a=null, b=null, c=null)
	{
		let ans = 0;
		if(a!=0, b!=0, c!=0)
		{
			ans = a+b+c;
		}
		else if(a!=0, b!=0)
		{
			ans = a+b;
		}
		else
			ans = a;
		console.log(ans);
	}
}

let obj = new overload();
obj.sum(2);
