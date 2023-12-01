-- Definiëren van de variabelen
local aimbotEnabled = true
local targetDistance = 1000

-- Functie om het doelwit te vinden
local function findTarget()
    local character = game.Players.LocalPlayer.Character
    local target = nil
    local minDistance = math.huge

    for _, player in ipairs(game.Players:GetPlayers()) do
        if player ~= game.Players.LocalPlayer then
            local targetCharacter = player.Character
            if targetCharacter and targetCharacter:FindFirstChild("HumanoidRootPart") then
                local distance = (character.HumanoidRootPart.Position - targetCharacter.HumanoidRootPart.Position).magnitude
                if distance < minDistance then
                    minDistance = distance
                    target = targetCharacter
                end
            end
        end
    end

    return target
end

-- Functie om de aimbot te laten werken
local function aimbot()
    if aimbotEnabled then
        local target = findTarget()
        if target then
            local aimPos = target.HumanoidRootPart.Position
            local cam = workspace.CurrentCamera
            local cameraCFrame = cam.CFrame
            local direction = aimPos - cameraCFrame.p
            local unitDirection = direction.unit
            local cf = CFrame.Angles(math.atan2(-unitDirection.z, unitDirection.x), math.atan2(unitDirection.y, unitDirection.x), 0) * CFrame.new(cameraCFrame.p)
            cam.CFrame = cf
        end
    end
end

-- Aimbot laten werken met een herhalingsstructuur
while true do
    aimbot()
    wait()
end