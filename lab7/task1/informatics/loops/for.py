#a
start_val = int(input())
end_val = int(input())
for current_num in range(start_val, end_val + 1):
    if current_num % 2 == 0:
        print(current_num, end=' ')
print()

#b
range_a, range_b, rem_c, div_d = int(input()), int(input()), int(input()), int(input())
for val_i in range(range_a, range_b + 1):
    if val_i % div_d == rem_c:
        print(val_i, end=' ')
print()

#c
sq_a = int(input())
sq_b = int(input())
for num_j in range(sq_a, sq_b + 1):
    root = int(num_j**0.5)
    if root * root == num_j:
        print(num_j, end=' ')
print()

#d
target_x = input()
digit_d = input()
count_digits = 0
for char in target_x:
    if char == digit_d:
        count_digits += 1
print(count_digits)

#e
num_for_sum = int(input())
total_digits_sum = 0
while num_for_sum > 0:
    total_digits_sum += num_for_sum % 10
    num_for_sum //= 10
print(total_digits_sum)

#f
original_num = int(input())
reversed_num = 0
while original_num > 0:
    reversed_num = reversed_num * 10 + original_num % 10
    original_num //= 10
print(reversed_num)

#g
x_val = int(input())
divisor_k = 2
while x_val % divisor_k != 0:
    divisor_k += 1
print(divisor_k)

#h
number_x = int(input())
for potential_div in range(1, number_x + 1):
    if number_x % potential_div == 0:
        print(potential_div, end=' ')
print()

#i
big_x = int(input())
div_count = 0
step = 1
while step * step <= big_x:
    if big_x % step == 0:
        if step * step == big_x:
            div_count += 1
        else:
            div_count += 2
    step += 1
print(div_count)

#j
hundred_sum = 0
for _ in range(100):
    hundred_sum += int(input())
print(hundred_sum)

#k
n_elements = int(input())
running_total = 0
for _ in range(n_elements):
    running_total += int(input())
print(running_total)

#l
binary_str = input()
decimal_res = int(binary_str, 2)
print(decimal_res)

#m
n_inputs = int(input())
zero_counter = 0
for _ in range(n_inputs):
    if int(input()) == 0:
        zero_counter += 1
print(zero_counter)