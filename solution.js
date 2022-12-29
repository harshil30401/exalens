function apartmentHunting(blocks, reqs) {
    // Write your code here.

    let minDistance = Number.MAX_VALUE;
    let optimalBlockIndex = -1;

    for (let i = 0; i < blocks.length; i++) {
        let maxDistance = 0;
        for (let j = 0; j < reqs.length; j++) {
            if (!blocks[i][reqs[j]]) {
                let distance = 1;
                while (i + distance < blocks.length && !blocks[i + distance][reqs[j]]) {
                    distance++;
                }
                while (i - distance >= 0 && !blocks[i - distance][reqs[j]]) {
                    distance++;
                }
                maxDistance = Math.max(maxDistance, distance);
            }
        }
        if (maxDistance < minDistance) {
            minDistance = maxDistance;
            optimalBlockIndex = i;
        }
    }

    return optimalBlockIndex;

}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;

