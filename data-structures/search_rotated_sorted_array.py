def search_rotated(nums, target):
    low = 0
    high = len(nums) - 1

    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] >= nums[low]:
            if target >= nums[low] and target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if target <= nums[high] and target > nums[mid]:
                low = mid + 1
            else:
                high = mid - 1
    return -1

if __name__ == '__main__':
    v1 = [6, 7, 1, 2, 3, 4, 5];
    v2 = sorted(v1)
    print(search_rotated(v1, 6))
    print(search_rotated(v2, 6))