#a
num_elements_arr = int(input())
elements_list = list(map(int, input().split()))

even_index_elements = elements_list[::2]

print(*even_index_elements)

#b
size_of_array = int(input())
values_array = list(map(int, input().split()))

for current_val in values_array:
    if current_val % 2 == 0:
        print(current_val, end=' ')
print()

#c
total_n_items = int(input())
items_data = list(map(int, input().split()))

positive_count = 0
for item_val in items_data:
    if item_val > 0:
        positive_count += 1

print(positive_count)

#d
count_n_elements = int(input())
array_data = list(map(int, input().split()))

count_greater = 0
for idx in range(1, count_n_elements):
    if array_data[idx] > array_data[idx - 1]:
        count_greater += 1

print(count_greater)

#e
n_size_limit = int(input())
numbers_seq = list(map(int, input().split()))

found_pair = False
for i_pos in range(1, n_size_limit):
    if numbers_seq[i_pos] * numbers_seq[i_pos - 1] > 0:
        found_pair = True
        break

if found_pair:
    print("YES")
else:
    print("NO")

#f
array_length_val = int(input())
elements_collection = list(map(int, input().split()))

peaks_count = 0
for k_index in range(1, array_length_val - 1):
    if elements_collection[k_index] > elements_collection[k_index - 1] and \
       elements_collection[k_index] > elements_collection[k_index + 1]:
        peaks_count += 1

print(peaks_count)

#g
total_elements_n = int(input())
main_array = list(map(int, input().split()))

for j_step in range(total_elements_n // 2):
    main_array[j_step], main_array[total_elements_n - 1 - j_step] = \
    main_array[total_elements_n - 1 - j_step], main_array[j_step]

print(*main_array)