def non_duplicated_values(values)
	h = { }
	values.each { |x| h[x].nil? ? h[x] = true : h[x] = false }
	(h.map { |k,v| k if v }).compact
end

values = [1,2,2,2,2,3,3,3,3,4,5,5]
puts non_duplicated_values(values)
