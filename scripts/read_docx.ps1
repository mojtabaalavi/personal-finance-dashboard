param([string]$path)
try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc = $word.Documents.Open($path, $false, $true) # Read-only
    $text = $doc.Content.Text
    $doc.Close($false)
    $word.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    Write-Output $text
} catch {
    Write-Error "Failed to read Word document: $_"
    if ($word) { $word.Quit() }
}
