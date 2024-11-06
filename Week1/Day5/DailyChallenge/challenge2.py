import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728


def search_pairs(nums, target):
    # make use of 2-pointers algorithm

    # prepare input: remove duplicates and sort it
    lst = sorted(list(set(nums)))

    # first index is always 0
    i = 0
    # the second index is right after the target value (or on the target itself)
    j = next(k for k,v in enumerate(lst) if v >= target)

    # start searching until this to indexes will meet
    while i < j:
        sum = lst[i] + lst[j]
        if sum == target: # hit
            print(f'{lst[i]} and {lst[j]} sums to the target_number {target}')
            i += 1
        elif sum > target:
            j -= 1
        else:
            i += 1

# search_pairs(list_of_numbers, target_number)
