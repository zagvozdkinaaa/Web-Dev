#a
limit_n = int(input())
base_val = 1
while base_val * base_val <= limit_n:
    print(base_val * base_val)
    base_val += 1

#b
number_to_div = int(input())
small_div = 2
while number_to_div % small_div != 0:
    small_div += 1
print(small_div)

#c
max_n = int(input())
current_power_of_two = 1
while current_power_of_two <= max_n:
    print(current_power_of_two, end=' ')
    current_power_of_two *= 2
print()

#d
check_n = int(input())
temp_val = check_n
while temp_val > 1 and temp_val % 2 == 0:
    temp_val //= 2

if temp_val == 1:
    print("YES")
else:
    print("NO")

#e
target_n = int(input())
k_index = 0
result_val = 1
while result_val < target_n:
    result_val *= 2
    k_index += 1
print(k_index)