#a
def get_min_of_four(a, b, c, d):
    return min(a, b, c, d)

input_data = list(map(int, input().split()))
result_min = get_min_of_four(input_data[0], input_data[1], input_data[2], input_data[3])
print(result_min)

#b
def custom_power(base_a, exp_n):
    res_power = 1.0
    for _ in range(exp_n):
        res_power *= base_a
    return res_power

raw_input = input().split()
a_val = float(raw_input[0])
n_val = int(raw_input[1])

print(custom_power(a_val, n_val))

#c
def logical_xor(x_bool, y_bool):
    if x_bool != y_bool:
        return 1
    else:
        return 0

x_in, y_in = map(int, input().split())
result_xor = logical_xor(bool(x_in), bool(y_in))
print(result_xor)
