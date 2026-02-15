param([string]$path, [string]$sheetName)
try {
    $excel = New-Object -ComObject Excel.Application
    $excel.Visible = $false
    $wb = $excel.Workbooks.Open($path, 0, $true) # Read-only
    try {
        $ws = $wb.Worksheets.Item($sheetName)
        if ($ws) {
            Write-Output "SHEET: $($ws.Name)"
            $usedRange = $ws.UsedRange
            $rows = $usedRange.Rows.Count
            $cols = $usedRange.Columns.Count
            
            # Read all used rows
            for ($r = 1; $r -le $rows; $r++) {
                $rowStr = ""
                for ($c = 1; $c -le $cols; $c++) {
                    $val = $ws.Cells.Item($r, $c).Text
                    if ($val) { $rowStr += "$val | " }
                }
                if ($rowStr) { Write-Output "ROW_$($r): $rowStr" }
            }
        } else {
            Write-Error "Sheet '$sheetName' not found."
        }
    } catch {
        Write-Error "Error accessing sheet '$sheetName': $_"
    }
    $wb.Close($false)
    $excel.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
} catch {
    Write-Error "Failed to open Excel file: $_"
    if ($excel) { $excel.Quit() }
}
