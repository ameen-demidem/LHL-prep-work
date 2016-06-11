# mult of 5		mult of 3
#	0			0			print x
#	0			1			print Fizz
#	1			0			print Buzz
#	1			1			print FizzBuzz
# the four cases can be encoded in decimal as: 0, 1, 2, 3
cases = [0, "Fizz", "Buzz", "FizzBuzz" ]

(1..100).each do |x|
	code = 0 # default 
	code = 1 if x%3 == 0
	code += 2 if x%5 == 0

	s = cases[code]
	puts s == 0 ? x : s
end
