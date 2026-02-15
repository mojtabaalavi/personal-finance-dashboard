param([string]$path)
try {
    $excel = New-Object -ComObject Excel.Application
    $excel.Visible = $false
    $wb = $excel.Workbooks.Open($path, 0, $true) # Read-only
    foreach ($ws in $wb.Worksheets) {
        Write-Output "SHEET: $($ws.Name)"
        # Read first 10 rows and 10 columns
        for ($r = 1; $r -le 10; $r++) {
            $rowStr = ""
            for ($c = 1; $c -le 10; $c++) {
                $val = $ws.Cells.Item($r, $c).Text
                if ($val) { $rowStr += "$val," }
            }
            if ($rowStr) { Write-Output "ROW_$($r): $rowStr" }
        }
    }
    $wb.Close($false)
    $excel.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
} catch {
    Write-Error "Failed to read Excel file: $_"
    if ($excel) { $excel.Quit() }
}
